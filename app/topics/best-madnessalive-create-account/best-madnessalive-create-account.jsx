import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-create-account');
}

export default function BestMadnessaliveCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-create-account" />;
}
