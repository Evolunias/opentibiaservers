import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-guide');
}

export default function RealMapTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-guide" />;
}
