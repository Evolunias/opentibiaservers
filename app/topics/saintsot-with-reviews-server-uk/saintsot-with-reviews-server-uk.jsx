import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-reviews-server-uk');
}

export default function SaintsotWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-reviews-server-uk" />;
}
