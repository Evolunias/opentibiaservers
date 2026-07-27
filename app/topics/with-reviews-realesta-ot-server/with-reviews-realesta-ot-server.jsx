import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-ot-server');
}

export default function WithReviewsRealestaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-ot-server" />;
}
