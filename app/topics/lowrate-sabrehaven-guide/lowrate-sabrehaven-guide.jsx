import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-guide');
}

export default function LowrateSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-guide" />;
}
