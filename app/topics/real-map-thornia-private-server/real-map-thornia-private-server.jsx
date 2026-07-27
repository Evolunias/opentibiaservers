import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-private-server');
}

export default function RealMapThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-private-server" />;
}
