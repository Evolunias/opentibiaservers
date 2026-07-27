import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-ot');
}

export default function WithReviewsOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-ot" />;
}
