import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-create-account');
}

export default function HighrateRealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-create-account" />;
}
