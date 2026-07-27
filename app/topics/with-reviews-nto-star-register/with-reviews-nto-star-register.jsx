import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-register');
}

export default function WithReviewsNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-register" />;
}
