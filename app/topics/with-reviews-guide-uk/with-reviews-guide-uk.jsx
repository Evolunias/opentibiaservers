import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-guide-uk');
}

export default function WithReviewsGuideUkKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-guide-uk" />;
}
