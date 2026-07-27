import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-reviews-server-usa');
}

export default function SaintsotWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-reviews-server-usa" />;
}
