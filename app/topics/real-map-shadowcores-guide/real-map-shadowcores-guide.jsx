import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-guide');
}

export default function RealMapShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-guide" />;
}
