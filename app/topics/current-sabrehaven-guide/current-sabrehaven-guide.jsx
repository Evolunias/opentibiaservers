import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-guide');
}

export default function CurrentSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-guide" />;
}
