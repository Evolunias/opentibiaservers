import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-create-account');
}

export default function HighrateOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-create-account" />;
}
