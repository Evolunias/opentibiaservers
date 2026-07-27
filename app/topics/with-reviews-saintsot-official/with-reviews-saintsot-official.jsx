import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-official');
}

export default function WithReviewsSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-official" />;
}
