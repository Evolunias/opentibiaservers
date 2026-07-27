import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-create-account');
}

export default function HighrateArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-create-account" />;
}
