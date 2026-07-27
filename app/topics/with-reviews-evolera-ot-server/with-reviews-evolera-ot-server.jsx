import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-ot-server');
}

export default function WithReviewsEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-ot-server" />;
}
