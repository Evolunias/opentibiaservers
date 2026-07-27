import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-create-account');
}

export default function HighrateThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-create-account" />;
}
