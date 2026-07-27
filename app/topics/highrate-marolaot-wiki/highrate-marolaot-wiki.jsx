import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-wiki');
}

export default function HighrateMarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-wiki" />;
}
