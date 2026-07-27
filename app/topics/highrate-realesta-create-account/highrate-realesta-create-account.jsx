import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-create-account');
}

export default function HighrateRealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-create-account" />;
}
