import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot');
}

export default function WithReviewsOxygenotKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot" />;
}
