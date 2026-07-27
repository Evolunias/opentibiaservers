import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-private-server');
}

export default function RealMapVenoreotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-private-server" />;
}
