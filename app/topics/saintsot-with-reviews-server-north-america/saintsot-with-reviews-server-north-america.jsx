import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-reviews-server-north-america');
}

export default function SaintsotWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-reviews-server-north-america" />;
}
