import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-wiki');
}

export default function ActiveMarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-wiki" />;
}
