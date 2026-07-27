import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-guide');
}

export default function RealMapBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-guide" />;
}
