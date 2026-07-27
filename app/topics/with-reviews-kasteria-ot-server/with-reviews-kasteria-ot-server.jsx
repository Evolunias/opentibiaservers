import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-ot-server');
}

export default function WithReviewsKasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-ot-server" />;
}
