# Supabase Sync Setup

Supabase is the storage layer for imported Open Tibia server records.

## Tables

Run:

1. `supabase/migrations/001_add_auth_and_users.sql`
2. `supabase/migrations/002_add_external_source_fields.sql`
3. `supabase/migrations/add_sync_logs.sql`

Main tables:

- `servers`: searchable server directory
- `sync_logs`: sync execution history
- `user_profiles`: submitter profile metadata

## Required Keys

Browser reads use:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Server-side sync writes use:

```env
SUPABASE_SERVICE_ROLE_KEY=
SYNC_TOKEN=
```

`SUPABASE_SERVICE_ROLE_KEY` must never be exposed in browser code.

## Sync Flow

The primary sync implementation is the Next.js API route:

```text
POST /api/sync-servers
```

It fetches otservlist.org, maps fields into `servers`, and logs the result in `sync_logs`.

See:

- `DEPLOYMENT_SETUP.md`
- `SYNC_AUTOMATION_SETUP.md`
- `SOURCE_SCHEMA_MAPPING.md`

## Verification Queries

```sql
SELECT COUNT(*) FROM servers;
SELECT source, COUNT(*) FROM servers GROUP BY source;
SELECT * FROM sync_logs ORDER BY timestamp DESC LIMIT 10;
```

## Existing Edge Function

`supabase/functions/sync-servers/index.ts` remains in the repo for projects that prefer Supabase Edge Functions, but the maintained application path is currently `/api/sync-servers`. Keep both paths aligned if you choose to deploy the Edge Function.
