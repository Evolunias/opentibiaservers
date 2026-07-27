import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-rules');
}

export default function RealMapShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-rules" />;
}
