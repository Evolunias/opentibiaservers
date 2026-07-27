import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-wiki');
}

export default function NewMarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-wiki" />;
}
