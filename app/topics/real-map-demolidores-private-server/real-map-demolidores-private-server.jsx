import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-private-server');
}

export default function RealMapDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-private-server" />;
}
