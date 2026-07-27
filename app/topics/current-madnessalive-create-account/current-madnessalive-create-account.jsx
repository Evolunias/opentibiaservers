import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-create-account');
}

export default function CurrentMadnessaliveCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-create-account" />;
}
