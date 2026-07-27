import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-register');
}

export default function WithReviewsThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-register" />;
}
