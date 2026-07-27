import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-create-account');
}

export default function NoResetClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-create-account" />;
}
