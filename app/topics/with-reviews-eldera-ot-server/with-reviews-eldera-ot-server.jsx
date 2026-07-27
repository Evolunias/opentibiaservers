import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-ot-server');
}

export default function WithReviewsElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-ot-server" />;
}
