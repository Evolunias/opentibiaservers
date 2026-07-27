import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-create-account');
}

export default function TopMadnessaliveCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-create-account" />;
}
