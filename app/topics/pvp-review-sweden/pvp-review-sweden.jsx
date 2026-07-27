import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-review-sweden');
}

export default function PvpReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-review-sweden" />;
}
