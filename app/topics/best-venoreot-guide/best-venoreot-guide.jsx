import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-guide');
}

export default function BestVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-guide" />;
}
