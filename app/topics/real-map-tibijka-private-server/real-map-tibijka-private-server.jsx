import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-private-server');
}

export default function RealMapTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-private-server" />;
}
