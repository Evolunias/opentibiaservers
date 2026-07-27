import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-rules');
}

export default function CustomShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-rules" />;
}
