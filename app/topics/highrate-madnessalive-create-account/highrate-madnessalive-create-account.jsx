import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-create-account');
}

export default function HighrateMadnessaliveCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-create-account" />;
}
