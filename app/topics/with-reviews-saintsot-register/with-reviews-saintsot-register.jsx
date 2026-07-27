import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-register');
}

export default function WithReviewsSaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-register" />;
}
