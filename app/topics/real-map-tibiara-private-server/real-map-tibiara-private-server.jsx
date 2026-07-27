import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-private-server');
}

export default function RealMapTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-private-server" />;
}
