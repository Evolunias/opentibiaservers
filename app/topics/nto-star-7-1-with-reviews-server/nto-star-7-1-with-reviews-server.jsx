import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-1-with-reviews-server');
}

export default function NtoStar71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-1-with-reviews-server" />;
}
