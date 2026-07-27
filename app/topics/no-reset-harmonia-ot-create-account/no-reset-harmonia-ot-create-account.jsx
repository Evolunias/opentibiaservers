import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-create-account');
}

export default function NoResetHarmoniaOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-create-account" />;
}
