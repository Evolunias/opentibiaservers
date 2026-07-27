import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-create-account');
}

export default function NoResetMadnessaliveCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-create-account" />;
}
