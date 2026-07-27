import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-create-account');
}

export default function HighrateRangerSArcaniCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-create-account" />;
}
