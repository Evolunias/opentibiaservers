import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-guide');
}

export default function WithReviewsImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-guide" />;
}
