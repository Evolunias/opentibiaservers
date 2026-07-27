import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-client');
}

export default function WithReviewsThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-client" />;
}
