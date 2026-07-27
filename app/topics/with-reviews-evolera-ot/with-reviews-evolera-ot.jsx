import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-ot');
}

export default function WithReviewsEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-ot" />;
}
