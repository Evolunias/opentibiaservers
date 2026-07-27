import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-rules');
}

export default function ActiveShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-rules" />;
}
