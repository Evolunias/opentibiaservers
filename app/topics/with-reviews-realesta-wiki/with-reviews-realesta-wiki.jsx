import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-wiki');
}

export default function WithReviewsRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-wiki" />;
}
