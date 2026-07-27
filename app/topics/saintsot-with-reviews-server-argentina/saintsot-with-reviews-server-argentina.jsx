import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-reviews-server-argentina');
}

export default function SaintsotWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-reviews-server-argentina" />;
}
