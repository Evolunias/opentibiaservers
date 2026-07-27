import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-guide');
}

export default function RealMapVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-guide" />;
}
