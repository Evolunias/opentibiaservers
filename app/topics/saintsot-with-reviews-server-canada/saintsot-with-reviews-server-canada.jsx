import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-reviews-server-canada');
}

export default function SaintsotWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-reviews-server-canada" />;
}
