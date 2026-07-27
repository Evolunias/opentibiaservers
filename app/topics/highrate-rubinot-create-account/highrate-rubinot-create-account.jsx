import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-create-account');
}

export default function HighrateRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-create-account" />;
}
