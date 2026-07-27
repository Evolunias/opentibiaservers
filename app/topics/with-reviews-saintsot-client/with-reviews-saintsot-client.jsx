import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-client');
}

export default function WithReviewsSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-client" />;
}
