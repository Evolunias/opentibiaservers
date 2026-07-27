import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-guide-north-america');
}

export default function WithReviewsGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-guide-north-america" />;
}
