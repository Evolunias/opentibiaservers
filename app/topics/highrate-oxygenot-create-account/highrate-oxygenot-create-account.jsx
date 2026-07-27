import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-create-account');
}

export default function HighrateOxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-create-account" />;
}
