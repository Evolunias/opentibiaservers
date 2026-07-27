import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-ots');
}

export default function RealMapShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-ots" />;
}
