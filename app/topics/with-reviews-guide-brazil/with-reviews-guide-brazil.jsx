import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-guide-brazil');
}

export default function WithReviewsGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-guide-brazil" />;
}
