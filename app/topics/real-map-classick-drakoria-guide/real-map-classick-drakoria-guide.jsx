import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-guide');
}

export default function RealMapClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-guide" />;
}
