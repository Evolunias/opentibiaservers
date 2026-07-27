import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-register');
}

export default function WithReviewsCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-register" />;
}
