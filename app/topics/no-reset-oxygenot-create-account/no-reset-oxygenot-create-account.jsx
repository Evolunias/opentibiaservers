import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-create-account');
}

export default function NoResetOxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-create-account" />;
}
