import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-rules');
}

export default function PopularShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-rules" />;
}
