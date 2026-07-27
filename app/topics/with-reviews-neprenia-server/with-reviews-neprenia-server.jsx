import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-server');
}

export default function WithReviewsNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-server" />;
}
