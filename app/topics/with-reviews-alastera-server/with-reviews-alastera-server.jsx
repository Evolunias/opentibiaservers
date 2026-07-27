import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-server');
}

export default function WithReviewsAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-server" />;
}
