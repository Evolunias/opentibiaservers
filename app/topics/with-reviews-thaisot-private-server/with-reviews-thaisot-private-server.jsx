import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-private-server');
}

export default function WithReviewsThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-private-server" />;
}
