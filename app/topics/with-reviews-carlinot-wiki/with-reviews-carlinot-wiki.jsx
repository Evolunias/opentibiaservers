import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-wiki');
}

export default function WithReviewsCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-wiki" />;
}
