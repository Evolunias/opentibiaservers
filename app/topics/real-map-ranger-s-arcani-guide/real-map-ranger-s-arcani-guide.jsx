import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ranger-s-arcani-guide');
}

export default function RealMapRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-ranger-s-arcani-guide" />;
}
