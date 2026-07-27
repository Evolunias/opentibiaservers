import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-private-server');
}

export default function RealMapTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-private-server" />;
}
