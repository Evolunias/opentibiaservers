import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-wiki');
}

export default function PopularCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-wiki" />;
}
