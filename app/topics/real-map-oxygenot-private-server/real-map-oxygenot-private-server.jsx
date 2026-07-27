import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-private-server');
}

export default function RealMapOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-private-server" />;
}
