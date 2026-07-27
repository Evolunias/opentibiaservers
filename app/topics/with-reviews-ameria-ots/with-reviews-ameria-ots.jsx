import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-ots');
}

export default function WithReviewsAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-ots" />;
}
