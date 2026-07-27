import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-guide-canada');
}

export default function WithReviewsGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-guide-canada" />;
}
