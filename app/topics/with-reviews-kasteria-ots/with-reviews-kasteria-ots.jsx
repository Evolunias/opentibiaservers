import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-ots');
}

export default function WithReviewsKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-ots" />;
}
