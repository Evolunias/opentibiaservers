import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-wiki');
}

export default function LowrateMarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-wiki" />;
}
