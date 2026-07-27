import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-website');
}

export default function WithReviewsNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-website" />;
}
