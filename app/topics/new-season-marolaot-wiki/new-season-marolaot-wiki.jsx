import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-wiki');
}

export default function NewSeasonMarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-wiki" />;
}
