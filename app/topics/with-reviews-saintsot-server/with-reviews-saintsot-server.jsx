import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-server');
}

export default function WithReviewsSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-server" />;
}
