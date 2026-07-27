import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-login');
}

export default function WithReviewsSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-login" />;
}
