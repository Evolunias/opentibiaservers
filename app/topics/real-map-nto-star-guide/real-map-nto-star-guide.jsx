import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-guide');
}

export default function RealMapNtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-guide" />;
}
