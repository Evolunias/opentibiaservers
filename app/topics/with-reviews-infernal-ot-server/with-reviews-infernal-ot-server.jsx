import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-infernal-ot-server');
}

export default function WithReviewsInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-infernal-ot-server" />;
}
