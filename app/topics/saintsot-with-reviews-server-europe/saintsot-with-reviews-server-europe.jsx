import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-reviews-server-europe');
}

export default function SaintsotWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-reviews-server-europe" />;
}
