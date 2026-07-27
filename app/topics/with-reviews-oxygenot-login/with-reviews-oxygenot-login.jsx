import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-login');
}

export default function WithReviewsOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-login" />;
}
