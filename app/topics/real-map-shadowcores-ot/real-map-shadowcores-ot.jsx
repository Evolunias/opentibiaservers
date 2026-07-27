import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-ot');
}

export default function RealMapShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-ot" />;
}
