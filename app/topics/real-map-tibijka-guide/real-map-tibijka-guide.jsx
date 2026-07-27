import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-guide');
}

export default function RealMapTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-guide" />;
}
