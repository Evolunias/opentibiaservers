import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-create-account');
}

export default function HighrateTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-create-account" />;
}
