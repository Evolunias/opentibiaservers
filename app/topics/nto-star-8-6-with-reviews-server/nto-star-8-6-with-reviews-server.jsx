import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-6-with-reviews-server');
}

export default function NtoStar86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-6-with-reviews-server" />;
}
