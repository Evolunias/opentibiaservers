import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-client');
}

export default function WithReviewsNilotClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-client" />;
}
