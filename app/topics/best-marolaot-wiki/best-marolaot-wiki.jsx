import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-wiki');
}

export default function BestMarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-wiki" />;
}
