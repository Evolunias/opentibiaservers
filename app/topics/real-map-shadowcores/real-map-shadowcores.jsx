import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores');
}

export default function RealMapShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores" />;
}
