import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-create-account');
}

export default function HighrateKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-create-account" />;
}
