import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-create-account');
}

export default function NoResetMiracleCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-create-account" />;
}
