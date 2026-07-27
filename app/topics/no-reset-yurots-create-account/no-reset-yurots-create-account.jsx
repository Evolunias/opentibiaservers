import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-create-account');
}

export default function NoResetYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-create-account" />;
}
