import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-reviews');
}

export default function SaintsotReviewsKeywordPage() {
  return <StaticKeywordPage slug="saintsot-reviews" />;
}
