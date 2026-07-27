import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-wiki');
}

export default function CurrentMarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-wiki" />;
}
