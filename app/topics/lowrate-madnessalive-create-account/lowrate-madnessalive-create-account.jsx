import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-create-account');
}

export default function LowrateMadnessaliveCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-create-account" />;
}
