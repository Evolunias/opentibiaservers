import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-ots');
}

export default function WithReviewsThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-ots" />;
}
