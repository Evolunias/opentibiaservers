import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-server');
}

export default function RealMapXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-server" />;
}
