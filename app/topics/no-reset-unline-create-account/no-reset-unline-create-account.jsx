import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-create-account');
}

export default function NoResetUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-create-account" />;
}
