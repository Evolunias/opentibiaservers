import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-reviews-server-poland');
}

export default function SaintsotWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-reviews-server-poland" />;
}
