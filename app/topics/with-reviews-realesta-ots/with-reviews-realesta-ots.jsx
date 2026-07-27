import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-ots');
}

export default function WithReviewsRealestaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-ots" />;
}
