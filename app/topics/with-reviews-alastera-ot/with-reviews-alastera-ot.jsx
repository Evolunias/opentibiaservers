import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-ot');
}

export default function WithReviewsAlasteraOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-ot" />;
}
