import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-private-server');
}

export default function RealMapRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-private-server" />;
}
