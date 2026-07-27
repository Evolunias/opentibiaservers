import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-server');
}

export default function WithReviewsNilotServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-server" />;
}
