import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-ots');
}

export default function WithReviewsOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-ots" />;
}
