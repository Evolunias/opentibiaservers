import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-reviews-server-germany');
}

export default function NtoStarWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-reviews-server-germany" />;
}
