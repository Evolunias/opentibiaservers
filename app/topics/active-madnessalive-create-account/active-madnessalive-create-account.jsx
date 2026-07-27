import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-create-account');
}

export default function ActiveMadnessaliveCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-create-account" />;
}
