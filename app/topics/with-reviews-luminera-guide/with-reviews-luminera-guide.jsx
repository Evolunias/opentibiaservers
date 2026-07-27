import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-guide');
}

export default function WithReviewsLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-guide" />;
}
