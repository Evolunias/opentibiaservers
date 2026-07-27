import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-reviews-server-latin-america');
}

export default function SaintsotWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-reviews-server-latin-america" />;
}
