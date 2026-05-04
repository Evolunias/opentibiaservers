/**
 * Utility for loading language-aware data files
 * Attempts to load language-specific versions, falls back to English
 */

export async function loadDataFile(filename, language = 'en') {
  try {
    // Try to load language-specific version first
    if (language !== 'en') {
      try {
        const response = await fetch(`/data/${filename.replace('.json', '')}-${language}.json`);
        if (response.ok) {
          return await response.json();
        }
      } catch (e) {
        // Fall through to English version
      }
    }
    
    // Load English version as fallback
    const response = await fetch(`/data/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading data file ${filename}:`, error);
    return null;
  }
}

/**
 * Format a date string to the current language
 */
export function formatDate(dateString, language = 'en') {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'pt' ? 'pt-PT' : language, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (e) {
    return dateString;
  }
}
