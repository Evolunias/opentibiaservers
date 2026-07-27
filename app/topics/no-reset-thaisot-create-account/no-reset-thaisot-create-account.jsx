import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-create-account');
}

export default function NoResetThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-create-account" />;
}
