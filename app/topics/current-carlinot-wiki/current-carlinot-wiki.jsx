import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-wiki');
}

export default function CurrentCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-wiki" />;
}
