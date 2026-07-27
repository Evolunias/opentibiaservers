import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-guide');
}

export default function NoResetSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-guide" />;
}
