import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-register');
}

export default function WithReviewsAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-register" />;
}
