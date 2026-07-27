import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-login');
}

export default function WithReviewsCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-login" />;
}
