import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-0-with-reviews-server');
}

export default function NtoStar100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-0-with-reviews-server" />;
}
