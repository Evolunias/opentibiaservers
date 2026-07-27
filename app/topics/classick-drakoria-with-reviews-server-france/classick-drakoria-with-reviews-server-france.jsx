import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-with-reviews-server-france');
}

export default function ClassickDrakoriaWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-with-reviews-server-france" />;
}
