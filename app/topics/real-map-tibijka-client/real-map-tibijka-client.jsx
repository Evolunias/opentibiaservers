import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-client');
}

export default function RealMapTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-client" />;
}
