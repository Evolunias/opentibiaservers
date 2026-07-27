import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-rules');
}

export default function NoResetRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-rules" />;
}
