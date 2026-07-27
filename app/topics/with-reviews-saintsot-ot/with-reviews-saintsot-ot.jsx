import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-ot');
}

export default function WithReviewsSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-ot" />;
}
