import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-review-france');
}

export default function PvpReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-review-france" />;
}
