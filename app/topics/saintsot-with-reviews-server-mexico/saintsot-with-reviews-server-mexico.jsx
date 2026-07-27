import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-reviews-server-mexico');
}

export default function SaintsotWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-reviews-server-mexico" />;
}
