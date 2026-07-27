import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-create-account');
}

export default function NoResetRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-create-account" />;
}
