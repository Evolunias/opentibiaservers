import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-login');
}

export default function WithReviewsNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-login" />;
}
