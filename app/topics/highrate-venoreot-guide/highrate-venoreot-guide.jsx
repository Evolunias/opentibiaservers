import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-guide');
}

export default function HighrateVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-guide" />;
}
