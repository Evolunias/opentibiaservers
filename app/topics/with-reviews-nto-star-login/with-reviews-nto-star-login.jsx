import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-login');
}

export default function WithReviewsNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-login" />;
}
