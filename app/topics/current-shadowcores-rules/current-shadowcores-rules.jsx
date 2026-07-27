import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-rules');
}

export default function CurrentShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-rules" />;
}
