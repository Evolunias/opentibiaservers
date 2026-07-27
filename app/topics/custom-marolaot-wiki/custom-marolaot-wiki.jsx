import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-wiki');
}

export default function CustomMarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-wiki" />;
}
