import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-wiki');
}

export default function MarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="marolaot-wiki" />;
}
