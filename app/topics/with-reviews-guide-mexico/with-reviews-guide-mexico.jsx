import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-guide-mexico');
}

export default function WithReviewsGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-guide-mexico" />;
}
