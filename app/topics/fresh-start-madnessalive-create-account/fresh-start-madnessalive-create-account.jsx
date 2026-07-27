import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-create-account');
}

export default function FreshStartMadnessaliveCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-create-account" />;
}
