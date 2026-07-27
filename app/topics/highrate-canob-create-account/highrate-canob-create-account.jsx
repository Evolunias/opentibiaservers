import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-create-account');
}

export default function HighrateCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-create-account" />;
}
