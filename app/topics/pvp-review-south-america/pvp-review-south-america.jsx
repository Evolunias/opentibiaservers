import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-review-south-america');
}

export default function PvpReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-review-south-america" />;
}
