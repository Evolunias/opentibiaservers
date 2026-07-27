import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-rules');
}

export default function NoResetOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-rules" />;
}
