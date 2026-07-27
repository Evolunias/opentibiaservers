import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-wiki');
}

export default function TopMarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-wiki" />;
}
