# Deployment Setup Guide - Open Tibia Servers

## Overview

This application fetches real-time server listings from otservlist.org and displays them in a searchable, filterable interface. A Netlify scheduled function syncs data every 15 minutes.

## Architecture

- **Frontend**: Next.js with React (deployed to Netlify)
- **Database**: Supabase (PostgreSQL)
- **Data Source**: otservlist.org
- **Sync**: Netlify Scheduled Function (every 15 minutes)

## Prerequisites

1. **Supabase Project** with the `servers` table created
2. **Netlify Account** connected to your GitHub repository
3. **Environment Variables** configured

## Step 1: Database Setup

Create the `servers` table in Supabase with the following structure:

```sql
create table public.servers (
  id uuid not null default gen_random_uuid (),
  name text not null,
  ip text not null,
  port integer null default 7171,
  website_url text null,
  owner_email text null,
  version text not null,
  client_type text null,
  world_type text null default 'PVP'::text,
  pvp_type text null,
  map_name text null,
  server_type text null,
  location text null,
  exp_rate numeric null,
  exp_stages boolean null default false,
  skill_rate numeric null,
  magic_rate numeric null,
  loot_rate numeric null,
  spawn_rate numeric null default 1,
  is_online boolean null default false,
  players_online integer null default 0,
  players_peak integer null default 0,
  uptime_percent numeric(5, 2) null,
  last_check timestamp with time zone null default now(),
  has_custom_map boolean null default false,
  has_custom_sprites boolean null default false,
  has_store boolean null default false,
  is_premium_required boolean null default false,
  has_battleye boolean null default false,
  description text null,
  tags text[] null,
  created_at timestamp with time zone null default now(),
  updated_at timestamp with time zone null default now(),
  constraint servers_pkey primary key (id),
  constraint servers_ip_key unique (ip)
) TABLESPACE pg_default;
```

## Step 2: Environment Variables

### Client-Side Variables (PUBLIC - Exposed to Browser)

These must have the `NEXT_PUBLIC_` prefix:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co/
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Get these from: **Supabase Dashboard → Project Settings → API → Project URL and Anon Key**

### Server-Side Variables (SECRET - Never Exposed)

Keep these secure, use only in server-side code:

```env
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_JWT_SECRET=your-jwt-secret
DIRECT_CONNECTION_STRING=postgresql://postgres:password@db.xxxx.supabase.co:5432/postgres
DATABASE_PASSWORD=your-db-password
SUPABASE_JWKS=xxxx-xxxx-xxxx-xxxx
```

Get the Service Role Key from: **Supabase Dashboard → Project Settings → API → Service Role Key**

### Application Variables

```env
PUBLIC_API_URL=/api
PROJECT_URL=https://your-project.supabase.co/
SYNC_TOKEN=your-secure-random-token-here
```

## Step 3: Configure Netlify Environment Variables

1. Go to **Netlify Dashboard → Site Settings → Build & Deploy → Environment**
2. Click **Edit Variables**
3. Add the following:

| Variable | Value | Type |
|----------|-------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase URL | public |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Anon Key | secret |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Service Role Key | secret |
| `SUPABASE_JWT_SECRET` | Your JWT Secret | secret |
| `DIRECT_CONNECTION_STRING` | Your Connection String | secret |
| `DATABASE_PASSWORD` | Your DB Password | secret |
| `SUPABASE_JWKS` | Your JWKS ID | secret |
| `SYNC_TOKEN` | Generate a random string | secret |

## Step 4: Verify Configuration

Before deploying, verify your setup:

1. **Test the sync endpoint locally**:
   ```bash
   npm run dev
   # Then visit: http://localhost:3000/api/sync-servers?token=your-sync-token
   ```

2. **Check Netlify scheduled functions are enabled**:
   - Go to **Netlify Dashboard → Site Settings → Functions**
   - Verify **Scheduled Functions** is enabled (requires paid plan)

3. **Verify the netlify.toml is correct**:
   ```toml
   [[scheduled]]
   cron = "*/15 * * * *"
   function = "sync-servers"
   ```

## Step 5: Deploy to Netlify

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Add server sync functionality"
   git push origin main
   ```

2. Netlify will automatically deploy from your GitHub repository

3. Monitor the build:
   - Go to **Netlify Dashboard → Deploys**
   - Wait for the build to complete
   - Check the **Functions** tab to verify `sync-servers` is deployed

## Step 6: Verify Sync is Working

1. **Manual trigger** (for testing):
   ```bash
   curl -X POST https://your-site.netlify.app/api/sync-servers \
     -H "x-sync-token: your-sync-token"
   ```

2. **Check Netlify Function Logs**:
   - Go to **Netlify Dashboard → Functions**
   - Click on `sync-servers`
   - View the function logs to see sync results

3. **Check Database**:
   - Go to **Supabase Dashboard → SQL Editor**
   - Run: `SELECT COUNT(*) FROM servers;`
   - Should return > 0 after first sync

## Troubleshooting

### Issue: No servers appearing in the app

1. Check if `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set correctly
2. Verify the anon key has `SELECT` permissions on the `servers` table
3. Check Supabase Row Level Security (RLS) policies - ensure public read access is enabled

### Issue: Sync function not running

1. Verify Netlify plan supports **Scheduled Functions** (Pro plan or higher)
2. Check Netlify function logs for errors
3. Verify `SUPABASE_SERVICE_ROLE_KEY` is set correctly
4. Try manual trigger to test the sync endpoint

### Issue: "Cannot find otservlist.org data"

The sync function tries multiple API endpoints. If none work:
1. Check the Netlify function logs for the actual error
2. Verify network connectivity from Netlify to otservlist.org
3. The data format may have changed - update the `parseServerData` function in `netlify/functions/sync-servers.js`

### Issue: "Unique constraint violated on ip"

This is normal - it means servers are being updated. The upsert handles this automatically.

## Monitoring

1. **Real-time logs**: Check Netlify Functions dashboard
2. **Database**: Monitor table size in Supabase
3. **Performance**: Track sync duration in function logs
4. **Errors**: Set up Netlify notifications for failed builds/functions

## Maintenance

### Updating Server Data Format

If otservlist.org changes their API format:

1. Edit `netlify/functions/sync-servers.js`
2. Update the `parseServerData()` function to match new field names
3. Update the fetch endpoints in `fetchFromOtservlist()` if needed
4. Deploy the changes

### Cleaning up Old Data

To remove servers not seen in the last 30 days:

```sql
DELETE FROM servers 
WHERE last_check < NOW() - INTERVAL '30 days';
```

Run this as a periodic maintenance task in Supabase.

## API Reference

### Sync Endpoint

```
POST /api/sync-servers
Header: x-sync-token: your-sync-token

Response:
{
  "success": true,
  "timestamp": "2024-01-15T10:30:00Z",
  "stats": {
    "inserted": 5,
    "updated": 120,
    "errors": 0
  }
}
```

### Server Fields

All fields from the database schema are exposed via the `/api/sync-servers` endpoint when fetching servers for the UI.

## Security Considerations

1. **Never commit .env files** - they're in .gitignore
2. **Rotate SYNC_TOKEN regularly** - use a strong random string
3. **Use Supabase RLS** - restrict database access to specific roles
4. **Limit anon key permissions** - it should only read from `servers`
5. **Monitor function executions** - watch for unusual patterns
