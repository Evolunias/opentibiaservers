import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-rules');
}

export default function NewShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-rules" />;
}
