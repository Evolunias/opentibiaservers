import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-ots');
}

export default function WithReviewsElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-ots" />;
}
