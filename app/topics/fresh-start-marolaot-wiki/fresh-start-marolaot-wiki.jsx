import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-wiki');
}

export default function FreshStartMarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-wiki" />;
}
