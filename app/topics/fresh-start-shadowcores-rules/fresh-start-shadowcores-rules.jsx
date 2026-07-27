import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-rules');
}

export default function FreshStartShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-rules" />;
}
