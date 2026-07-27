import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-server');
}

export default function WithReviewsCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-server" />;
}
