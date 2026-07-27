import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-rules');
}

export default function NoResetShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-rules" />;
}
