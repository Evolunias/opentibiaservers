import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-server');
}

export default function RealMapVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-server" />;
}
