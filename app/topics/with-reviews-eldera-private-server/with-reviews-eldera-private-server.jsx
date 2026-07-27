import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-private-server');
}

export default function WithReviewsElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-private-server" />;
}
