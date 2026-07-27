import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-wiki');
}

export default function OfficialMarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-wiki" />;
}
