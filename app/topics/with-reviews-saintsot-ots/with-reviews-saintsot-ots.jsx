import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-ots');
}

export default function WithReviewsSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-ots" />;
}
