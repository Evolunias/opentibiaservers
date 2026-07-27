import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-guide');
}

export default function RealMapAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-guide" />;
}
