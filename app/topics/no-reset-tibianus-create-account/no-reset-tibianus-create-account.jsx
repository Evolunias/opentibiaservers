import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-create-account');
}

export default function NoResetTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-create-account" />;
}
