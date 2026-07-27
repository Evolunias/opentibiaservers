import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-guide-sweden');
}

export default function WithReviewsGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-guide-sweden" />;
}
