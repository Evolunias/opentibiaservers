import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-create-account');
}

export default function NoResetAureraGlobalCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-create-account" />;
}
