import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-6-with-reviews-server');
}

export default function NtoStar76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-6-with-reviews-server" />;
}
