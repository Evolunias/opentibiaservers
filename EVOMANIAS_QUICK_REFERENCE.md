# Evomanias Standalone - Quick Reference

## ✅ What's Been Done

Your Evomanias website is now configured as a **completely separate application** with:

### Architecture
- ✅ Separate from "Open Tibia Servers" main site
- ✅ Independent Aiven MySQL database connection
- ✅ Server-side API routes for secure database access
- ✅ Client-side React components with session management

### Features Implemented
- ✅ **Registration**: Create accounts with email/password
- ✅ **Login**: Authenticate and manage sessions
- ✅ **Character Management**: Create, view, and manage characters
- ✅ **Highscores**: Leaderboard with filtering by vocation
- ✅ **Account Dashboard**: View your characters and account info

### Database
- ✅ Connected to Aiven MySQL: `lisca-lisca.j.aivencloud.com:11270`
- ✅ Credentials stored securely in `.env.local`
- ✅ Schema documentation provided

## 🚀 Next Steps (In Order)

### 1. Create Database Tables (REQUIRED)
**Status**: ❌ **ACTION NEEDED**

Run the SQL from `AIVEN_MYSQL_SCHEMA.md` in your Aiven MySQL database:

```sql
CREATE TABLE accounts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'active',
  INDEX idx_email (email),
  INDEX idx_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE players (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### 2. Install Dependencies (OPTIONAL - May already be done)
```bash
npm install
```

### 3. Test Locally
```bash
npm run dev
```
- Open `http://localhost:3000/evomanias`
- Test registration: `/evomanias/register`
- Test login: `/evomanias/login`
- Test character creation in account page

### 4. Deploy to Production Domain

**Option A: Vercel (Easy)**
1. Push code to GitHub
2. Import repo in Vercel
3. Add environment variables (AIVEN_MYSQL_*)
4. Deploy

**Option B: Custom Domain**
1. Choose hosting (Netlify, Railway, etc.)
2. Add environment variables
3. Connect to your domain (e.g., evomanias.com, evolunia.net)
4. Deploy

## 📁 Key Files

| File | Purpose |
|------|---------|
| `app/evomanias/` | All Evomanias pages |
| `app/api/evomanias/` | API endpoints |
| `app/context/EvomaniasAuthContext.jsx` | Session management |
| `lib/aiven.js` | Database connection |
| `.env.local` | Aiven credentials |
| `AIVEN_MYSQL_SCHEMA.md` | Database schema |
| `EVOMANIAS_STANDALONE_SETUP.md` | Full setup guide |

## 🔗 Routes

| Route | Purpose | Auth Required |
|-------|---------|---------------|
| `/evomanias` | Home page | ❌ |
| `/evomanias/register` | Create account | ❌ |
| `/evomanias/login` | Sign in | ❌ |
| `/evomanias/account` | Dashboard | ✅ |
| `/evomanias/highscores` | Leaderboard | ❌ |
| `/evomanias/character/[id]` | Character detail | ❌ |

## 📚 API Endpoints

### Authentication
```
POST /api/evomanias/auth
{ action: 'register', email, password, username }
{ action: 'login', email, password }
```

### Characters
```
GET /api/evomanias/characters
  ?action=list&accountId=<id>        # User's characters
  ?action=detail&characterId=<id>    # Character details
  ?action=highscores&vocation=<v>    # Leaderboard

POST /api/evomanias/characters
{ action: 'create', accountId, name, vocation, world }
```

## ⚡ Environment Variables

Located in `.env.local`:
```
AIVEN_MYSQL_HOST=lisca-lisca.j.aivencloud.com
AIVEN_MYSQL_PORT=11270
AIVEN_MYSQL_USER=avnadmin
AIVEN_MYSQL_PASSWORD=AVNS_aAFYhCaAgipj_cBveKk
AIVEN_MYSQL_DATABASE=defaultdb
```

**⚠️ Keep these credentials SECRET - never commit to git**

## 🔐 Security Features

✅ Passwords hashed with bcrypt (10 salt rounds)
✅ Database credentials stored server-side only
✅ SQL injection prevented with prepared statements
✅ Session management via localStorage

## 🎯 What's NOT Included Yet

- Password reset/forgot password
- Email verification
- Social login (OAuth)
- Character deletion
- Account settings
- Two-factor authentication
- Admin panel
- Discord/Webhook integration

These can be added later as needed!

## 🐛 Troubleshooting

**"Failed to fetch" error**
- ❌ Create the database tables first (see Step 1)

**"Character not found"**
- ❌ Ensure players table exists
- ❌ Verify data is in the database

**"Invalid credentials"**
- ❌ Check password is stored correctly (bcrypt)
- ❌ Verify email/password are correct

**Database connection error**
- ❌ Test connection: `mysql -h lisca-lisca.j.aivencloud.com -P 11270 -u avnadmin -p`
- ❌ Check `.env.local` has correct values
- ❌ Verify Aiven firewall allows your IP

## 📞 Support Resources

- Full setup guide: `EVOMANIAS_STANDALONE_SETUP.md`
- Schema documentation: `AIVEN_MYSQL_SCHEMA.md`
- Next.js docs: https://nextjs.org/docs
- Aiven support: https://aiven.io/support

---

**Status**: Ready for database setup and testing
**Last Updated**: January 2024
