// Language configuration with country codes and flags
export const LANGUAGES = [
  {
    code: 'en',
    name: 'English',
    country: 'United States',
    flag: '🇺🇸',
    htmlLang: 'en',
  },
  {
    code: 'pl',
    name: 'Polish',
    country: 'Poland',
    flag: '🇵🇱',
    htmlLang: 'pl',
  },
  {
    code: 'pt',
    name: 'Portuguese',
    country: 'Portugal',
    flag: '🇵🇹',
    htmlLang: 'pt',
  },
  {
    code: 'es',
    name: 'Spanish',
    country: 'Spain',
    flag: '🇪🇸',
    htmlLang: 'es',
  },
  {
    code: 'sv',
    name: 'Swedish',
    country: 'Sweden',
    flag: '🇸🇪',
    htmlLang: 'sv',
  },
  {
    code: 'ar',
    name: 'Arabic',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    htmlLang: 'ar',
  },
  {
    code: 'fi',
    name: 'Finnish',
    country: 'Finland',
    flag: '🇫🇮',
    htmlLang: 'fi',
  },
];

export const DEFAULT_LANGUAGE = 'en';

export const getLanguageByCode = (code) => {
  return LANGUAGES.find((lang) => lang.code === code) || LANGUAGES.find((lang) => lang.code === DEFAULT_LANGUAGE);
};
