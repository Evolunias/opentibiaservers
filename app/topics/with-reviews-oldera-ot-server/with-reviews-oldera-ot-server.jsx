import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-ot-server');
}

export default function WithReviewsOlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-ot-server" />;
}
