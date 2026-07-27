import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-guide-latin-america');
}

export default function WithReviewsGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-guide-latin-america" />;
}
