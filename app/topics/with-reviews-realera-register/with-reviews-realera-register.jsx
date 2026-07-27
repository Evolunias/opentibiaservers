import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-register');
}

export default function WithReviewsRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-register" />;
}
