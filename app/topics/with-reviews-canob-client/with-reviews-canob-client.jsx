import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-client');
}

export default function WithReviewsCanobClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-client" />;
}
