import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-reviews-server-brazil');
}

export default function SaintsotWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-reviews-server-brazil" />;
}
