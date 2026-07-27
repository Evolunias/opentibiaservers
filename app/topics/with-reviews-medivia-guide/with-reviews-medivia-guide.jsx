import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-guide');
}

export default function WithReviewsMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-guide" />;
}
