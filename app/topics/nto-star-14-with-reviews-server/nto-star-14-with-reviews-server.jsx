import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-with-reviews-server');
}

export default function NtoStar14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-with-reviews-server" />;
}
