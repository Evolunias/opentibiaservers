import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka');
}

export default function RealMapTibijkaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka" />;
}
