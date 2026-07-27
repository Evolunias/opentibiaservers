import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-guide');
}

export default function WithReviewsNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-guide" />;
}
