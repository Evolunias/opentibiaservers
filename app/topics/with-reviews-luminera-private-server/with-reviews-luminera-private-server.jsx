import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-private-server');
}

export default function WithReviewsLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-private-server" />;
}
