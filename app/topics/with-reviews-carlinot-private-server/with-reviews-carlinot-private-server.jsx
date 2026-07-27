import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-private-server');
}

export default function WithReviewsCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-private-server" />;
}
