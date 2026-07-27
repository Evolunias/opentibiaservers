import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-wiki');
}

export default function PopularMarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-wiki" />;
}
