import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-client');
}

export default function RealMapVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-client" />;
}
