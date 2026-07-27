import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-create-account');
}

export default function NoResetInfernalOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-create-account" />;
}
