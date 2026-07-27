import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-register');
}

export default function WithReviewsAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-register" />;
}
