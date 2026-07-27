import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-guide');
}

export default function LowrateVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-guide" />;
}
