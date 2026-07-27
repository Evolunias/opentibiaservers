import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-wiki');
}

export default function BestCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-wiki" />;
}
