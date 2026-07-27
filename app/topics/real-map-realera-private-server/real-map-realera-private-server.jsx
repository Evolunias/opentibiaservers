import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-private-server');
}

export default function RealMapRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-private-server" />;
}
