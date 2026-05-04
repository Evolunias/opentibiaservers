/**
 * Image Utility System
 * Manages internal vs external image paths
 * Provides fallback mechanisms for offline support
 */

import imageManifest from '@/public/data/image-manifest.json';

// Configuration - controls image sourcing behavior
const IMAGE_CONFIG = {
  useLocalImages: true,   // Use local images with fallback to external
  fallbackToExternal: true, // Fallback to external URL if local not found
  imageDir: '/images',
  spriteDir: '/sprites',
  baseUrl: 'https://evolisca.com',
  verifyLocalAssets: false // Set to true to verify files exist before using
};

/**
 * Get image URL - returns local or external path with intelligent fallback
 * @param {string} imageKey - Unique image identifier (e.g., 'logo', 'alpha-ape', 'ominous-helmet')
 * @param {string} category - Image category ('ui', 'items', 'creatures')
 * @param {object} fallbackUrl - External URL to use as fallback
 * @returns {string} - Image URL (local or external)
 */
export function getImageUrl(imageKey, category = 'items', fallbackUrl = null) {
  if (!imageKey) return fallbackUrl || null;

  const keys = normalizeKey(imageKey);
  let imageData = getImageData(keys.hyphenated, category) || getImageData(keys.spaced, category);

  // Strategy: Try local first, then external URL, then fallback
  if (IMAGE_CONFIG.useLocalImages && imageData?.internalPath) {
    // Return local path - browser will fall back to external if 404
    return imageData.internalPath;
  }

  // If local not available or disabled, try external URL from manifest
  if (imageData?.externalUrl) {
    return imageData.externalUrl;
  }

  // Final fallback
  return fallbackUrl || null;
}

/**
 * Get complete image data object
 * @param {string} imageKey - Image identifier
 * @param {string} category - Image category
 * @returns {object|null} - Image data or null
 */
export function getImageData(imageKey, category = 'items') {
  // Handle pre-normalized keys (string)
  if (!imageKey) return null;

  const key = typeof imageKey === 'string' ? imageKey : imageKey.hyphenated || imageKey.spaced;

  if (category === 'ui' && imageManifest.images.ui[key]) {
    return imageManifest.images.ui[key];
  }

  if (category === 'items' && imageManifest.itemSpritesMapping.items[key]) {
    return imageManifest.itemSpritesMapping.items[key];
  }

  if (category === 'creatures' && imageManifest.creatureImagesMapping.creatures[key]) {
    return imageManifest.creatureImagesMapping.creatures[key];
  }

  return null;
}

/**
 * Get logo path with proper fallback
 * @returns {string} - Logo URL
 */
export function getLogoUrl() {
  // Return local logo path only - no external fallback
  return '/images/evolisca-logo.webp';
}

/**
 * Get item sprite URL
 * @param {string} itemName - Item name
 * @returns {string|null} - Sprite URL
 */
export function getItemSpriteUrl(itemName) {
  if (!itemName) return null;

  const keys = normalizeKey(itemName);
  const imageData = getImageData(keys.hyphenated, 'items') || getImageData(keys.spaced, 'items');

  if (imageData) {
    return IMAGE_CONFIG.useLocalImages ? imageData.internalPath : imageData.externalUrl;
  }

  return null;
}

/**
 * Get creature image URL
 * @param {string} creatureName - Creature name
 * @returns {string|null} - Image URL
 */
export function getCreatureImageUrl(creatureName) {
  if (!creatureName) return null;

  const keys = normalizeKey(creatureName);
  const imageData = getImageData(keys.hyphenated, 'creatures') || getImageData(keys.spaced, 'creatures');

  if (imageData) {
    return IMAGE_CONFIG.useLocalImages ? imageData.internalPath : imageData.externalUrl;
  }

  return null;
}

/**
 * Build internal path for an image
 * @param {string} imageKey - Image identifier
 * @param {string} category - Category ('items', 'creatures', 'ui')
 * @param {string} extension - File extension (default: 'gif')
 * @returns {string} - Internal path
 */
export function getInternalImagePath(imageKey, category = 'items', extension = 'gif') {
  const key = normalizeKey(imageKey);
  return `${IMAGE_CONFIG.imageDir}/${category}/${key}.${extension}`;
}

/**
 * Build external URL for evolisca.com asset
 * @param {string} path - Path on evolisca.com (without domain)
 * @returns {string} - Full external URL
 */
export function getExternalImageUrl(path) {
  if (path.startsWith('http')) return path;
  if (path.startsWith('/')) return `${IMAGE_CONFIG.baseUrl}${path}`;
  return `${IMAGE_CONFIG.baseUrl}/${path}`;
}

/**
 * Normalize image key for consistent lookup
 * Tries both hyphenated and space-separated variations
 * @param {string} key - Image key
 * @returns {object} - { hyphenated, spaced } versions
 */
function normalizeKey(key) {
  const base = String(key)
    .toLowerCase()
    .trim()
    .replace(/\(.*?\)/g, '') // Remove parenthetical content
    .trim();

  return {
    hyphenated: base.replace(/\s+/g, '-'),
    spaced: base.replace(/\s+/g, ' ')
  };
}

/**
 * Check if image exists in manifest
 * @param {string} imageKey - Image identifier
 * @param {string} category - Category
 * @returns {boolean}
 */
export function hasImageData(imageKey, category = 'items') {
  if (!imageKey) return false;
  const keys = normalizeKey(imageKey);
  return getImageData(keys.hyphenated, category) !== null || getImageData(keys.spaced, category) !== null;
}

/**
 * Get all images in a category
 * @param {string} category - Category ('items', 'creatures', 'ui')
 * @returns {object} - All images in category
 */
export function getCategoryImages(category = 'items') {
  switch(category) {
    case 'ui':
      return imageManifest.images.ui;
    case 'items':
      return imageManifest.itemSpritesMapping.items;
    case 'creatures':
      return imageManifest.creatureImagesMapping.creatures;
    default:
      return {};
  }
}

/**
 * Update image configuration at runtime
 * @param {object} config - Configuration object
 */
export function setImageConfig(config) {
  Object.assign(IMAGE_CONFIG, config);
}

/**
 * Get current configuration
 * @returns {object} - Current configuration
 */
export function getImageConfig() {
  return { ...IMAGE_CONFIG };
}

/**
 * Get image manifest info
 * @returns {object} - Manifest metadata
 */
export function getImageManifestInfo() {
  return {
    version: imageManifest.version,
    lastUpdated: imageManifest.lastUpdated,
    totalImages: Object.keys(imageManifest.itemSpritesMapping.items).length,
    description: imageManifest.description
  };
}

/**
 * Resolve image URL with smart fallback
 * Tries: local -> external -> sprite system -> fallback
 * @param {string} itemName - Item name
 * @param {string} itemId - Item ID (optional)
 * @param {string} fallbackUrl - Last resort URL
 * @returns {string} - Best available URL
 */
export function resolveImageUrl(itemName, itemId = null, fallbackUrl = null) {
  // Try item image lookup
  const itemImageUrl = getItemSpriteUrl(itemName);
  if (itemImageUrl) return itemImageUrl;

  // Try by ID if provided
  if (itemId) {
    const idImageUrl = getItemSpriteUrl(itemId);
    if (idImageUrl) return idImageUrl;
  }

  // Use provided fallback
  if (fallbackUrl) return fallbackUrl;

  return null;
}
