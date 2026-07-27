import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-create-account');
}

export default function NoResetMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-create-account" />;
}
