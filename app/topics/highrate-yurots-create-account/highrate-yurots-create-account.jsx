import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-create-account');
}

export default function HighrateYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-create-account" />;
}
