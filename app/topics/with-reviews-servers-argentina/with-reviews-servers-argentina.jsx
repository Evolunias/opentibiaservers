import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-servers-argentina');
}

export default function WithReviewsServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-servers-argentina" />;
}
