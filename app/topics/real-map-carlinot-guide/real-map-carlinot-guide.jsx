import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-guide');
}

export default function RealMapCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-guide" />;
}
