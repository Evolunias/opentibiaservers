import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-server');
}

export default function WithReviewsCanobServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-server" />;
}
