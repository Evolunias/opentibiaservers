import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-ots');
}

export default function WithReviewsAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-ots" />;
}
