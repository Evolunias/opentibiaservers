import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-private-server');
}

export default function WithReviewsNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-private-server" />;
}
