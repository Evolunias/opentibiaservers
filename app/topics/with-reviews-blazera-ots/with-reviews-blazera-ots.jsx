import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-ots');
}

export default function WithReviewsBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-ots" />;
}
