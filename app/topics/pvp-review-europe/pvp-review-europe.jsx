import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-review-europe');
}

export default function PvpReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-review-europe" />;
}
