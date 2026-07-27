import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-create-account');
}

export default function HighrateImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-create-account" />;
}
