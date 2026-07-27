import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-13-with-reviews-server');
}

export default function NtoStar13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-13-with-reviews-server" />;
}
