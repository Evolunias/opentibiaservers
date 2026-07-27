import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-with-reviews-server');
}

export default function NtoStar11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-with-reviews-server" />;
}
