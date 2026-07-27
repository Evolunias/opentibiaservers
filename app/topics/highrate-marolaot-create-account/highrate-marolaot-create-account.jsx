import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-create-account');
}

export default function HighrateMarolaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-create-account" />;
}
