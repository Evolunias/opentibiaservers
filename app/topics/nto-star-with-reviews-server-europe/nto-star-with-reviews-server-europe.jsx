import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-reviews-server-europe');
}

export default function NtoStarWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-reviews-server-europe" />;
}
