import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-rules');
}

export default function BestShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-rules" />;
}
