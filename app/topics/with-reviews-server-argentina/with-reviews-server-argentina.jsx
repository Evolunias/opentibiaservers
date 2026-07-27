import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-argentina');
}

export default function WithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-argentina" />;
}
