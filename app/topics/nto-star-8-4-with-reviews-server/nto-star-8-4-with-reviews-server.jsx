import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-4-with-reviews-server');
}

export default function NtoStar84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-4-with-reviews-server" />;
}
