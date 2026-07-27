import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-register');
}

export default function WithReviewsNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-register" />;
}
