import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria');
}

export default function WithReviewsAmeriaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria" />;
}
