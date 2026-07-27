import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-servers');
}

export default function RealMapVenoreotServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-servers" />;
}
