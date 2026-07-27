import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-review-south-america');
}

export default function NonPvpReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-review-south-america" />;
}
