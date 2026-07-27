import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-ots');
}

export default function WithReviewsEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-ots" />;
}
