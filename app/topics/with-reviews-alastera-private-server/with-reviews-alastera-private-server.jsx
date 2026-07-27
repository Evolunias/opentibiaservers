import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-private-server');
}

export default function WithReviewsAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-private-server" />;
}
