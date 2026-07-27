import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera');
}

export default function WithReviewsAlasteraKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera" />;
}
