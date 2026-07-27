import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-private-server');
}

export default function RealMapTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-private-server" />;
}
