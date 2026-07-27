import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-reviews-server-france');
}

export default function SaintsotWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-reviews-server-france" />;
}
