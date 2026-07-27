import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-private-server');
}

export default function RealMapXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-private-server" />;
}
