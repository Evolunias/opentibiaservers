import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-guide');
}

export default function RealMapTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-guide" />;
}
