import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-ot');
}

export default function WithReviewsElderaOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-ot" />;
}
