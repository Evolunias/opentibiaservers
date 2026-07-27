import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-review-germany');
}

export default function NonPvpReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-review-germany" />;
}
