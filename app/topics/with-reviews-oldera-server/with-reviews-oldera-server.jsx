import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-server');
}

export default function WithReviewsOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-server" />;
}
