import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-review-europe');
}

export default function NonPvpReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-review-europe" />;
}
