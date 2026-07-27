import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-guide');
}

export default function CurrentVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-guide" />;
}
