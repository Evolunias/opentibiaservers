import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-create-account');
}

export default function HighrateNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-create-account" />;
}
