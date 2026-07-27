import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-private-server');
}

export default function RealMapImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-private-server" />;
}
