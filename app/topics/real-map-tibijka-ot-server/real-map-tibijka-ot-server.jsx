import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-ot-server');
}

export default function RealMapTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-ot-server" />;
}
