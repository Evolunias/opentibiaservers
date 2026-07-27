import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-official');
}

export default function WithReviewsNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-official" />;
}
