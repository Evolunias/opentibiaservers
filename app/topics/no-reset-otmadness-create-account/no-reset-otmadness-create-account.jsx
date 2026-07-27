import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-create-account');
}

export default function NoResetOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-create-account" />;
}
