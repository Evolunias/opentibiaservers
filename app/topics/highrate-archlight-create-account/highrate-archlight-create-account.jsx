import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-create-account');
}

export default function HighrateArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-create-account" />;
}
