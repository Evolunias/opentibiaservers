import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-create-account');
}

export default function PopularMadnessaliveCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-create-account" />;
}
