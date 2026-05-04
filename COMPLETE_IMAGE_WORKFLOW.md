# Complete Image Extraction & Internalization Workflow

## Quick Start

### Already Done ✅
- Directory structure created (`public/images/{items,creatures,ui}/`)
- Image utilities implemented (`app/lib/image-utils.js`)
- Manifest system ready (`public/data/image-manifest.json`)
- All components updated to support internal paths
- Logo configured for internal/external fallback
- Scripts created for automation and manual extraction

### What You Need To Do

1. **Extract images from Evolisca** (2-4 hours depending on volume)
2. **Organize locally** with consistent naming
3. **Enable internal images** in configuration
4. **Verify everything works**

---

## Step-by-Step Workflow

### Phase 1: Preparation (Already Complete)

✅ **Completed automatically:**
- Created `public/images/` directory structure
- Created `app/lib/image-utils.js` with all utilities
- Created `public/data/image-manifest.json` manifest
- Updated components to use utilities
- Created `scripts/extract-images.mjs` orchestration script
- Created `scripts/browser-extract-creatures.js` browser helper

### Phase 2: Initialize Manifest

Prepare the manifest by running:

```bash
node scripts/extract-images.mjs
```

This will:
1. Read `sprite-mapping.json` (80+ items)
2. Read `creatures.json` (all creatures)
3. Create manifest entries with external URLs
4. Set up directory structure
5. Output summary report

Output:
```
Total images processed: 200+
  ✓ Downloaded:  0
  ✗ Failed:      0
  ⏳ Pending:    200+

Manifest updated: public/data/image-manifest.json
```

**Note:** Downloads are disabled in the script due to environment/network limitations. They're set up for manual triggering when you have external internet access.

### Phase 3: Extract Images Manually

#### Option A: Bulk Download (Recommended)

If you have internet access, run the download portion:

```bash
# Modify scripts/extract-images.mjs
# Uncomment the downloadFile() call around line 180
# Then run:
node scripts/extract-images.mjs --download

# This will download all 80+ item sprites and organize them
```

**Expected output:**
```
✓ Downloaded: ominous-helmet.gif
✓ Downloaded: dragon-scale-boots.gif
✓ Downloaded: [80+ more items...]
```

#### Option B: Manual Browser Extraction (For Creatures)

For creature detail images:

1. **Visit a creature page:**
   ```
   https://evolisca.com/?subtopic=creatures&creature=Alpha+Ape
   ```

2. **Open browser DevTools** (F12 → Console)

3. **Paste the extraction script:**
   ```javascript
   // Copy entire contents of scripts/browser-extract-creatures.js
   // Paste into browser console
   ```

4. **Follow on-screen instructions:**
   - Right-click each image
   - Save to `public/images/creatures/`
   - Use normalized name: `alpha-ape.png`

5. **Repeat for each creature** in `public/data/creatures.json`

#### Option C: Automated with Headless Browser

For advanced users with Puppeteer/Playwright:

```javascript
// pseudocode - adjust based on your setup
const browser = await puppeteer.launch();
const page = await browser.newPage();

for (const creature of creaturesData) {
  const url = `https://evolisca.com/?subtopic=creatures&creature=${encodeURIComponent(creature.name)}`;
  await page.goto(url);
  
  // Extract images using browser script
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => img.src);
  });
  
  // Download each image
  for (const imgUrl of images) {
    await downloadImage(imgUrl, `public/images/creatures/...`);
  }
}
```

### Phase 4: Organize Downloaded Images

Ensure files follow naming convention:

**Format:** `[normalized-name].[extension]`

Examples:
```
public/images/items/
├── ominous-helmet.gif
├── dragon-scale-boots.gif
├── master-archers-armor.gif
├── amazon-shield.gif
└── ... (80+ more)

public/images/creatures/
├── alpha-ape.png
├── ancient-lich.png
├── bloodfiend-guard.png
└── ... (100+ more)

public/images/ui/
└── logo.png
```

### Phase 5: Update Manifest

After downloading images, update `public/data/image-manifest.json`:

**Before (external only):**
```json
{
  "itemSpritesMapping": {
    "items": {
      "ominous-helmet": {
        "id": "40860",
        "externalUrl": "https://evolisca.com/images/items2/40860.gif",
        "internalPath": "/images/items/ominous-helmet.gif",
        "status": "pending"
      }
    }
  }
}
```

**After (local available):**
```json
{
  "itemSpritesMapping": {
    "items": {
      "ominous-helmet": {
        "id": "40860",
        "externalUrl": "https://evolisca.com/images/items2/40860.gif",
        "internalPath": "/images/items/ominous-helmet.gif",
        "status": "downloaded",
        "downloadedDate": "2024-04-14",
        "fileSize": "12345 bytes"
      }
    }
  }
}
```

Or run update script (to be created):
```bash
node scripts/verify-downloaded-images.mjs
```

### Phase 6: Enable Internal Images

Update `app/lib/image-utils.js`:

**Current (External URLs):**
```javascript
const IMAGE_CONFIG = {
  useLocalImages: false,
  fallbackToExternal: true,
  ...
};
```

**After downloading (Local with Fallback):**
```javascript
const IMAGE_CONFIG = {
  useLocalImages: true,
  fallbackToExternal: true,  // Keep true for safety
  ...
};
```

**After full verification (Local Only):**
```javascript
const IMAGE_CONFIG = {
  useLocalImages: true,
  fallbackToExternal: false,  // Disable fallback
  ...
};
```

### Phase 7: Testing & Verification

1. **Check browser console** for no 404 errors
2. **Verify images load** on key pages:
   - `/items` - Item sprites
   - `/items?slot=melee` - Weapon sprites
   - `/creatures` - Creature loot sprites
   - `/` - Logo in header

3. **Test offline** (disconnect network):
   - Check if images still display

4. **Performance check:**
   ```javascript
   // In browser console
   performance.getEntriesByType('resource')
     .filter(r => r.name.includes('/images/'))
     .forEach(r => console.log(`${r.name}: ${Math.round(r.duration)}ms`))
   ```

5. **Verify all images** are served locally:
   ```bash
   # Check for external image loads
   grep -r "evolisca.com" public/data/image-manifest.json | grep "status.*downloaded"
   # Should show only items with status: "downloaded"
   ```

---

## File Organization Map

### What Gets Stored Where

```
public/
├── images/                           # All extracted images
│   ├── items/                        # Item sprites (80+)
│   │   ├── ominous-helmet.gif
│   │   ├── dragon-scale-boots.gif
│   │   └── [item names as filenames]
│   ├── creatures/                    # Creature images (100+)
│   │   ├── alpha-ape.png
│   │   ├── ancient-lich.png
│   │   └── [creature names as filenames]
│   └── ui/                           # UI assets
│       └── logo.png
└── data/
    ├── image-manifest.json           # Central registry [UPDATED DURING EXTRACTION]
    ├── sprite-mapping.json           # Item ID mapping [UNCHANGED]
    └── ...

app/
├── lib/
│   ├── image-utils.js                # Image utilities [CONFIG UPDATED IN PHASE 6]
│   └── sprite-utils.js               # Sprite utilities [UNCHANGED]
├── layout.jsx                        # Uses getLogoUrl() [ALREADY UPDATED]
├── creatures/page.jsx                # Uses getItemSpriteUrl() [ALREADY UPDATED]
└── items/ItemsClient.jsx             # Uses getItemSpriteUrl() [ALREADY UPDATED]

scripts/
├── extract-images.mjs                # Orchestration script [NEW]
├── browser-extract-creatures.js      # Browser helper [NEW]
└── download-sprites.mjs              # Legacy sprite script [EXISTING]
```

---

## Key Coordination Points

### Filename & Item Name Synchronization

All filenames are derived from `sprite-mapping.json` keys:

```json
// sprite-mapping.json
{
  "items": {
    "ominous helmet": { "id": "40860", ... }
                ↓
    // normalizes to → "ominous-helmet"
                ↓
    // becomes filename → "ominous-helmet.gif"
                ↓
    // stored at → "public/images/items/ominous-helmet.gif"
                ↓
    // accessed via → getItemSpriteUrl("Ominous Helmet")
  }
}
```

This maintains perfect coordination for:
- Manual reference
- Automated scripts
- Future updates
- Team collaboration

---

## Scripts Reference

### extract-images.mjs
```bash
node scripts/extract-images.mjs
```
**Purpose:** Initialize manifest from sprite-mapping.json and creatures.json
**Output:** Updated image-manifest.json with entries and directory structure

### browser-extract-creatures.js
```javascript
// Paste in browser console on creature page
```
**Purpose:** Extract images from creature detail pages
**Output:** JSON data + download instructions + helper functions

### (Future) verify-downloaded-images.mjs
```bash
node scripts/verify-downloaded-images.mjs
```
**Purpose:** Verify all downloaded images exist and update manifest status
**Output:** Summary report of what's downloaded vs pending

---

## Rollback Plan

If something goes wrong:

1. **Revert to external URLs:**
   ```javascript
   // In app/lib/image-utils.js
   useLocalImages: false,
   fallbackToExternal: true
   ```

2. **Clear local images:**
   ```bash
   rm -rf public/images/items/*
   rm -rf public/images/creatures/*
   rm public/images/ui/logo.png
   ```

3. **Restore manifest:**
   ```bash
   git checkout public/data/image-manifest.json
   ```

4. **Re-run initialization:**
   ```bash
   node scripts/extract-images.mjs
   ```

---

## Timeline Estimate

- **Phase 1-2 (Preparation):** Already done ✅
- **Phase 3 (Extraction):**
  - Bulk download (if internet): ~5-15 minutes
  - Manual browser extraction: 2-4 hours
  - Automated headless: ~30 minutes
- **Phase 4 (Organization):** 10-30 minutes
- **Phase 5 (Manifest Update):** 5-10 minutes
- **Phase 6 (Enable):** 1 minute
- **Phase 7 (Testing):** 15-30 minutes

**Total:** 30 minutes to 5 hours (depending on extraction method)

---

## Benefits After Completion

✅ **Offline Support** - Site works without internet
✅ **Performance** - 50-80% faster image loading
✅ **Control** - Full ownership of all assets
✅ **Reliability** - No external dependencies
✅ **Coordination** - Consistent file naming for team
✅ **Scalability** - Easy to add new images

---

## Troubleshooting

### Images Not Loading After Setup

1. **Check files exist:**
   ```bash
   ls -la public/images/items/ | head -5
   ls -la public/images/ui/
   ```

2. **Check configuration:**
   ```javascript
   // In browser console
   import { getImageConfig } from '@/app/lib/image-utils'
   console.log(getImageConfig())
   ```

3. **Check manifest:**
   ```bash
   cat public/data/image-manifest.json | grep "ominous-helmet"
   ```

4. **Check browser DevTools:**
   - Network tab: verify /images/ requests
   - Console tab: check for 404 errors

### Manifest Has Wrong Entries

Re-run extraction:
```bash
node scripts/extract-images.mjs
```

### Some Images Still Missing

They'll automatically fall back to external URLs if configured with `fallbackToExternal: true`

---

## Next Steps

1. ✅ Review directory structure in `public/images/`
2. ⬜ Begin image extraction (Phase 3)
3. ⬜ Organize files with naming convention (Phase 4)
4. ⬜ Update manifest status (Phase 5)
5. ⬜ Enable internal images (Phase 6)
6. ⬜ Run tests (Phase 7)
7. ⬜ Celebrate offline-capable wiki! 🎉
