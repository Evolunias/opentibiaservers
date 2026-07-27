import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-reviews-server-germany');
}

export default function SaintsotWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-reviews-server-germany" />;
}
