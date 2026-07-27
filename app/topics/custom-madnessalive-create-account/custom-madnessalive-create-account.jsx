import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-create-account');
}

export default function CustomMadnessaliveCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-create-account" />;
}
