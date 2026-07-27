import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-create-account');
}

export default function NoResetCoxaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-create-account" />;
}
