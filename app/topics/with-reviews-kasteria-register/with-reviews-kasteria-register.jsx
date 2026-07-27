import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-register');
}

export default function WithReviewsKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-register" />;
}
