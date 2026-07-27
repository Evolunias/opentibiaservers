import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-create-account');
}

export default function HighrateNtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-create-account" />;
}
