import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-rules');
}

export default function HighrateShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-rules" />;
}
