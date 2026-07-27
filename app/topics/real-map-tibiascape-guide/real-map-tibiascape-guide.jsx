import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-guide');
}

export default function RealMapTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-guide" />;
}
