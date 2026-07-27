import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-server');
}

export default function RealMapTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-server" />;
}
