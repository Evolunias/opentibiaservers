import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-rules');
}

export default function TopShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-rules" />;
}
