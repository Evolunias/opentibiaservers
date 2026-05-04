# Image System - Quick Reference Guide

## Directory Structure

```
public/images/
├── items/              # Item sprites (80+ GIFs)
├── creatures/          # Creature images (100+ PNGs)
└── ui/                 # UI assets (logo, icons)

public/data/
├── image-manifest.json # Central registry
└── sprite-mapping.json # Item → ID mapping
```

## Key Files

| File | Purpose |
|------|---------|
| `app/lib/image-utils.js` | Image utility functions |
| `public/data/image-manifest.json` | Image registry & status |
| `app/layout.jsx` | Uses `getLogoUrl()` |
| `app/creatures/page.jsx` | Uses `getItemSpriteUrl()` |
| `app/items/ItemsClient.jsx` | Uses `getItemSpriteUrl()` |

## Utility Functions

```javascript
import {
  getImageUrl,              // Get URL by key & category
  getLogoUrl,               // Get logo specifically
  getItemSpriteUrl,         // Get item sprite URL
  getCreatureImageUrl,      // Get creature image URL
  getInternalImagePath,     // Build local path
  getExternalImageUrl,      // Build external URL
  hasImageData,             // Check if image exists
  resolveImageUrl,          // Smart fallback resolution
  setImageConfig,           // Change configuration
  getImageConfig            // Get current config
} from '@/app/lib/image-utils';
```

## Configuration

Location: `app/lib/image-utils.js` (lines ~16-21)

```javascript
const IMAGE_CONFIG = {
  useLocalImages: false,    // true = use local, false = use external
  fallbackToExternal: true, // true = fallback to external if local missing
  imageDir: '/images',
  baseUrl: 'https://evolisca.com'
};
```

## File Naming Convention

**Rule:** Normalize item/creature name
- Lowercase
- Spaces → hyphens
- Remove special characters
- Consolidate hyphens

**Examples:**
```
"Ominous Helmet"        → ominous-helmet.gif
"Dragon Scale Boots"    → dragon-scale-boots.gif
"Master Archer's Armor" → master-archers-armor.gif
"Alpha Ape"             → alpha-ape.png
```

## Commands

```bash
# Initialize manifest (creates entries, prepares downloads)
node scripts/extract-images.mjs

# Run in browser console for creature pages
# (Contents of scripts/browser-extract-creatures.js)
```

## Status Codes

| Status | Meaning |
|--------|---------|
| `pending` | Not yet downloaded |
| `downloaded` | Available locally |
| `failed` | Download attempt failed |
| `pending - needs manual extraction` | Needs manual work |

## Usage Examples

### Get Logo
```javascript
<img src={getLogoUrl()} alt="Logo" />
```

### Get Item Sprite
```javascript
const url = getItemSpriteUrl("Ominous Helmet");
<img src={url} alt="Ominous Helmet" />
```

### Smart Resolution
```javascript
const url = resolveImageUrl("Dragon Boots", "11118");
// Tries: local → external → null
```

### Check If Image Exists
```javascript
if (hasImageData("logo", "ui")) {
  console.log("Logo found in manifest");
}
```

## Enable/Disable Local Images

**Enable (use local with fallback):**
```javascript
// In app/lib/image-utils.js
const IMAGE_CONFIG = {
  useLocalImages: true,     // ← Change this
  fallbackToExternal: true,
  ...
};
```

**Disable (use external only):**
```javascript
const IMAGE_CONFIG = {
  useLocalImages: false,    // ← Change this
  fallbackToExternal: true,
  ...
};
```

## Current Status

- ✅ Directory structure created
- ✅ Image utilities implemented
- ✅ Manifest system ready
- ✅ Components integrated
- ⏳ Images to be extracted
- ⏳ Manifest to be updated

## Size Information

**Item Sprites:**
- Count: 80+
- Format: GIF
- Average: 5-20KB each
- Total: ~500KB-2MB

**Creature Images:**
- Count: 100+
- Format: PNG
- Average: 20-100KB each
- Total: ~2-10MB

**UI Assets:**
- Logo: ~50KB

## Performance Impact

### With Local Images
- Page load: ⚡⚡⚡ (5-20ms per image)
- Bandwidth: Minimal
- Offline: ✓ Supported

### With External URLs (Current)
- Page load: ⚡ (100-300ms per image)
- Bandwidth: ~100KB per page
- Offline: ✗ Not supported

## Verification Steps

1. **Check directories exist:**
   ```bash
   ls -la public/images/{items,creatures,ui}
   ```

2. **Check manifest:**
   ```bash
   cat public/data/image-manifest.json | jq '.itemSpritesMapping.itemCount'
   ```

3. **Check configuration:**
   ```bash
   grep -A 5 "const IMAGE_CONFIG" app/lib/image-utils.js
   ```

4. **Test in browser:**
   ```javascript
   // Open DevTools console on any page
   import { getLogoUrl, getImageConfig } from '@/app/lib/image-utils'
   console.log(getImageConfig())
   console.log(getLogoUrl())
   ```

## Troubleshooting Checklist

- [ ] Directories exist in `public/images/`
- [ ] Files have correct names (lowercase, hyphens)
- [ ] Manifest entries have `status: "downloaded"`
- [ ] Configuration has `useLocalImages: true`
- [ ] Browser console shows no 404 errors
- [ ] Images display in all pages
- [ ] Works offline (disconnect network, refresh)

## Fallback Chain

```
getItemSpriteUrl(name)
    ↓
manifest.itemSpritesMapping.items[normalized-name]
    ↓ (if useLocalImages = true)
/images/items/[name].gif
    ↓ (if local not found & fallbackToExternal = true)
https://evolisca.com/images/items2/[id].gif
    ↓ (if both fail)
null → Image hidden by onError
```

## Related Files

**Sprite System** (complementary)
- `app/lib/sprite-utils.js` - Sprite URL utilities
- `public/data/sprite-mapping.json` - Item ID mapping

**Legacy Downloads** (for backwards compat)
- `scripts/download-sprites.mjs` - Download item sprites by ID

## Support References

- **Full Guide:** `IMAGE_INTERNALIZATION_GUIDE.md`
- **Workflow:** `COMPLETE_IMAGE_WORKFLOW.md`
- **This:** `IMAGE_SYSTEM_REFERENCE.md`

## Quick Start (3 Steps)

1. **Initialize manifest:**
   ```bash
   node scripts/extract-images.mjs
   ```

2. **Extract images** (see `COMPLETE_IMAGE_WORKFLOW.md` Phase 3)

3. **Enable local:**
   ```javascript
   // In app/lib/image-utils.js
   useLocalImages: true
   ```
