import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-15-with-reviews-server');
}

export default function NtoStar15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-15-with-reviews-server" />;
}
