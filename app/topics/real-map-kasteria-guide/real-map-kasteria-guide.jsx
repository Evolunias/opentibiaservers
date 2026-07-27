import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-guide');
}

export default function RealMapKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-guide" />;
}
