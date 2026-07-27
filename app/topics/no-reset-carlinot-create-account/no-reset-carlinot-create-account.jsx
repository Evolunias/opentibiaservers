import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-create-account');
}

export default function NoResetCarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-create-account" />;
}
