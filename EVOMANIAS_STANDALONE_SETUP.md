# Evomanias Standalone Setup Guide

Evomanias is now configured as a standalone website within this repository that connects to your Aiven MySQL database.

## Current Setup

### Technology Stack
- **Frontend**: Next.js 14 with React 18
- **Database**: Aiven MySQL (Cloud Hosted)
- **Authentication**: Custom JWT-based with bcrypt password hashing
- **API**: Next.js API routes

### Database Configuration

Your Aiven MySQL credentials are set in `.env.local`:
```
AIVEN_MYSQL_HOST=lisca-lisca.j.aivencloud.com
AIVEN_MYSQL_PORT=11270
AIVEN_MYSQL_USER=avnadmin
AIVEN_MYSQL_PASSWORD=AVNS_aAFYhCaAgipj_cBveKk
AIVEN_MYSQL_DATABASE=defaultdb
```

## Step 1: Create Database Tables

Before running the application, create the required tables in your Aiven MySQL database.

### Using MySQL Workbench or CLI

Connect to your database and run the SQL from `AIVEN_MYSQL_SCHEMA.md`:

```sql
-- Create accounts table
CREATE TABLE IF NOT EXISTS accounts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'active',
  INDEX idx_email (email),
  INDEX idx_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create players table
CREATE TABLE IF NOT EXISTS players (
  id INT PRIMARY KEY AUTO_INCREMENT,
  account_id INT NOT NULL,
  name VARCHAR(255) UNIQUE NOT NULL,
  level INT DEFAULT 1,
  experience BIGINT DEFAULT 0,
  vocation VARCHAR(50) NOT NULL,
  world VARCHAR(100) DEFAULT 'Evomanias',
  status VARCHAR(50) DEFAULT 'active',
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP NULL,
  FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE,
  INDEX idx_account_id (account_id),
  INDEX idx_name (name),
  INDEX idx_experience (experience DESC),
  INDEX idx_level (level DESC),
  INDEX idx_vocation (vocation)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## Step 2: Install Dependencies

```bash
npm install
```

This installs the required packages:
- `mysql2`: MySQL driver for Node.js
- `bcrypt`: Password hashing library

## Step 3: Run Development Server

```bash
npm run dev
```

Access the application:
- Main site: `http://localhost:3000` (Open Tibia Servers)
- Evomanias: `http://localhost:3000/evomanias`

## Step 4: Test the Application

### Test Registration
1. Go to `/evomanias/register`
2. Create an account with email and password
3. Should redirect to `/evomanias/account` on success

### Test Login
1. Go to `/evomanias/login`
2. Sign in with your credentials
3. Should redirect to `/evomanias/account` on success

### Test Character Creation
1. In account page, click "Create Character"
2. Enter character name, select vocation
3. Character should appear in the list

### Test Highscores
1. Go to `/evomanias/highscores`
2. Create multiple characters to see them ranked
3. Filter by vocation or search by name

## Deployment

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
```bash
git push origin main
```

2. **Connect to Vercel**
   - Visit https://vercel.com/new
   - Import this repository
   - Add environment variables:
     - `AIVEN_MYSQL_HOST`
     - `AIVEN_MYSQL_PORT`
     - `AIVEN_MYSQL_USER`
     - `AIVEN_MYSQL_PASSWORD`
     - `AIVEN_MYSQL_DATABASE`

3. **Deploy**
   - Click "Deploy"
   - Your site will be live at `yourproject.vercel.app`

### Option 2: Custom Domain (Separate Website)

To deploy Evomanias as a completely separate website:

#### 1. Create Separate Repository (Optional)
```bash
git clone <this-repo>
cd evomanias-standalone
rm -rf app/{components,context,pages} FEATURES.md QUICKSTART.md ...
# Keep only: app/evomanias/*, app/api/evomanias/*, lib/aiven.js, public/, package.json, etc.
```

#### 2. Deploy to Your Domain
Using Vercel, Netlify, Railway, or another hosting provider:
- Set your custom domain (e.g., `evomanias.com`, `evolunia.net`)
- Configure DNS to point to your hosting provider
- Add the same environment variables

#### 3. Configure CORS (If Needed)
If your game server is on a different domain, ensure CORS headers are set:

```javascript
// In Next.js API route
export async function POST(req) {
  const res = new Response(...);
  res.headers.set('Access-Control-Allow-Origin', process.env.GAME_SERVER_ORIGIN);
  res.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  return res;
}
```

## Project Structure

```
app/
├── evomanias/
│   ├── layout.jsx              # Auth provider, header
│   ├── page.jsx                # Home page
│   ├── login/page.jsx          # Login form
│   ├── register/page.jsx       # Registration form
│   ├── account/page.jsx        # User dashboard, character management
│   ├── highscores/page.jsx     # Leaderboard
│   └── character/[id]/page.jsx # Character detail page
│
├── api/
│   └── evomanias/
│       ├── auth/route.js       # Register & login endpoints
│       └── characters/route.js # Character CRUD endpoints
│
├── context/
│   └── EvomaniasAuthContext.jsx # Auth state management
│
└── components/
    └── Header.jsx              # Navigation (removed Evomanias link from main site)

lib/
└── aiven.js                    # MySQL connection pool

.env.local                       # Aiven credentials
```

## API Endpoints

### Authentication

**POST** `/api/evomanias/auth`
- **Register**: `{ action: 'register', email, password, username }`
- **Login**: `{ action: 'login', email, password }`

### Characters

**GET** `/api/evomanias/characters?action=<action>&<params>`
- `action=list&accountId=<id>` - Get user's characters
- `action=detail&characterId=<id>` - Get character details
- `action=highscores&vocation=<vocation>` - Get leaderboard

**POST** `/api/evomanias/characters`
- `{ action: 'create', accountId, name, vocation, world }`

## Security Notes

✅ **Passwords**: Hashed with bcrypt (10 salt rounds)
✅ **Database**: Credentials stored in `.env.local` (server-side only)
✅ **Sessions**: Stored in localStorage (token-based auth ready)
⚠️ **HTTPS**: Use HTTPS in production
⚠️ **CORS**: Configure for your game server domain if needed

## Troubleshooting

### Database Connection Error
- Verify Aiven credentials in `.env.local`
- Check Aiven IP whitelist includes your deployment server
- Test connection using MySQL CLI: `mysql -h lisca-lisca.j.aivencloud.com -P 11270 -u avnadmin -p`

### Authentication Fails
- Ensure `accounts` table exists
- Check password is being hashed correctly (bcrypt)
- Verify email/username uniqueness in database

### Characters Not Loading
- Confirm `players` table exists
- Check foreign key constraint on `account_id`
- Verify character has valid account_id

### CORS Errors
- Check if game server is on different domain
- Add CORS headers to API routes if needed
- Verify browser allows cross-origin requests

## Next Steps

1. ✅ Setup database tables
2. ✅ Configure environment variables
3. ✅ Test locally
4. ✅ Deploy to production domain
5. 🔄 Integrate with your game server
6. 🔄 Customize branding and styling
7. 🔄 Add password reset, email verification
8. 🔄 Add character deletion, account settings

## Support

For issues with:
- **Evomanias setup**: Check this guide and `AIVEN_MYSQL_SCHEMA.md`
- **Database**: Consult Aiven documentation
- **Next.js**: Visit https://nextjs.org/docs
- **Game server integration**: Your game server documentation

---

**Last Updated**: 2024
**Version**: 1.0.0 - Standalone Edition
