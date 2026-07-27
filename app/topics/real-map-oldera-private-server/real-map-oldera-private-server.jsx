import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-private-server');
}

export default function RealMapOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-private-server" />;
}
