import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-wiki');
}

export default function WithReviewsNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-wiki" />;
}
