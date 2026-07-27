import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-create-account');
}

export default function LowrateMarolaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-create-account" />;
}
