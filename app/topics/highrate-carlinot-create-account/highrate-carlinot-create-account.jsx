import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-create-account');
}

export default function HighrateCarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-create-account" />;
}
