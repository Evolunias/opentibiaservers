import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-login');
}

export default function WithReviewsAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-login" />;
}
