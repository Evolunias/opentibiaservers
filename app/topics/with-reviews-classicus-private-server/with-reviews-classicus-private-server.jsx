import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-private-server');
}

export default function WithReviewsClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-private-server" />;
}
