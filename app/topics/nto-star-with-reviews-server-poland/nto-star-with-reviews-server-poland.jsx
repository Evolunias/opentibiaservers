import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-reviews-server-poland');
}

export default function NtoStarWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-reviews-server-poland" />;
}
