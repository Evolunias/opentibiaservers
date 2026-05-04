import { useLanguage } from '@/app/context/LanguageContext';

/**
 * Custom hook for using translations in components
 * Usage: const t = useTranslate();
 *        <span>{t('key.to.translation')}</span>
 */
export function useTranslate() {
  const { t } = useLanguage();
  return t;
}
