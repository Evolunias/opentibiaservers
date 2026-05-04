# Quick Setup Checklist

## Before Deploying to Netlify

### ✅ Environment Variables

- [ ] Create `.env.local` in project root (never commit this)
- [ ] Add `NEXT_PUBLIC_SUPABASE_URL` (from Supabase Project Settings)
- [ ] Add `NEXT_PUBLIC_SUPABASE_ANON_KEY` (from Supabase Project Settings)
- [ ] Add `SUPABASE_SERVICE_ROLE_KEY` (from Supabase Project Settings)
- [ ] Generate and add `SYNC_TOKEN` (any strong random string)

### ✅ Database

- [ ] Create Supabase project
- [ ] Run the `servers` table creation SQL (see `DEPLOYMENT_SETUP.md`)
- [ ] Verify table exists with `SELECT * FROM servers LIMIT 1;`

### ✅ Local Testing

```bash
npm install
npm run dev
# Visit http://localhost:3000 to see the app
# Visit http://localhost:3000/api/sync-servers?token=your-sync-token to test sync
```

### ✅ Netlify Configuration

1. [ ] Connect GitHub repo to Netlify
2. [ ] Go to **Site Settings → Build & Deploy → Environment**
3. [ ] Add all environment variables (mark secrets as "secret")
4. [ ] Verify plan supports **Scheduled Functions** (Pro+)

### ✅ Deploy

```bash
git push origin main
# Netlify auto-deploys on push
# Monitor: Dashboard → Deploys
```

### ✅ Verify Sync Works

1. [ ] Check **Netlify Dashboard → Functions → sync-servers**
2. [ ] Verify logs show successful sync
3. [ ] Check **Supabase → servers table** has > 0 rows
4. [ ] Open the deployed site and verify servers display

## Environment Variables Reference

### What Goes in Netlify (Site Settings → Environment)

```
NEXT_PUBLIC_SUPABASE_URL=https://...supabase.co/
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
SYNC_TOKEN=random-secure-string
SUPABASE_JWT_SECRET=your-jwt-secret
DIRECT_CONNECTION_STRING=postgresql://...
DATABASE_PASSWORD=your-password
SUPABASE_JWKS=uuid-string
```

### What Should NOT Be in Code

- ❌ No secrets hardcoded in source files
- ❌ No `.env` files committed to git
- ❌ No API keys in components or client code

## Files Created/Modified

### New Files
- `app/api/sync-servers/route.js` - API endpoint for manual sync
- `netlify/functions/sync-servers.js` - Scheduled sync function
- `DEPLOYMENT_SETUP.md` - Full setup guide
- `SETUP_CHECKLIST.md` - This file

### Modified Files
- `netlify.toml` - Added scheduled function config
- `app/components/ServerCard.jsx` - Added spawn rate display
- `.env.example` - Updated with all required variables

### Existing Components (Already Good)
- `app/page.jsx` - Main page with filtering
- `app/components/ServerList.jsx` - Table view
- `app/server/[id]/page.jsx` - Detailed server view
- `lib/supabase.js` - Database client

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| "No servers found" | Check `NEXT_PUBLIC_SUPABASE_*` vars are set in Netlify |
| Sync not running | Verify Netlify plan is Pro+ (Scheduled Functions require paid plan) |
| 401 Unauthorized on sync | Verify `SYNC_TOKEN` is correct in Netlify env vars |
| Database connection fails | Check `SUPABASE_SERVICE_ROLE_KEY` in Netlify |

## Testing the Sync Endpoint

```bash
# Local testing
curl "http://localhost:3000/api/sync-servers?token=your-sync-token"

# Production testing
curl "https://your-site.netlify.app/api/sync-servers?token=your-sync-token"
```

Expected response:
```json
{
  "success": true,
  "timestamp": "2024-01-15T10:30:00Z",
  "stats": {
    "updated": 150,
    "errors": 0
  }
}
```

## Scheduled Sync Details

- **Frequency**: Every 15 minutes
- **Function**: `netlify/functions/sync-servers.js`
- **Config**: `netlify.toml` - `cron = "*/15 * * * *"`
- **Logs**: Available in Netlify Dashboard → Functions

## Data Flow

1. **Every 15 minutes**: Netlify calls sync-servers function
2. **Function fetches**: Data from otservlist.org API
3. **Data is parsed**: Mapped to database schema
4. **Upsert to DB**: Servers table updates with new/updated records
5. **Stale servers**: Marked offline if not seen in last 5 minutes
6. **UI fetches**: Next.js fetches from Supabase on page load
7. **Display**: React renders server cards/list

## Next Steps

1. Configure Netlify environment variables
2. Push code to GitHub
3. Monitor first sync in Netlify function logs
4. Verify servers appear on live site
5. Set up monitoring/alerts (optional)
