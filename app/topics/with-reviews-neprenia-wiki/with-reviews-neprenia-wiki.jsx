import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-wiki');
}

export default function WithReviewsNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-wiki" />;
}
