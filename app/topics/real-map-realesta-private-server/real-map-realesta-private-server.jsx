import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-private-server');
}

export default function RealMapRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-private-server" />;
}
