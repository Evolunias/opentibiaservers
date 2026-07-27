import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-wiki');
}

export default function NoResetMarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-wiki" />;
}
