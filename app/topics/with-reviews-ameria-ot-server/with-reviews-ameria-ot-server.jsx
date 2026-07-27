import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-ot-server');
}

export default function WithReviewsAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-ot-server" />;
}
