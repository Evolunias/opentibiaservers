import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-ot');
}

export default function WithReviewsThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-ot" />;
}
