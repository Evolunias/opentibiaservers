import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-non-pvp-review');
}

export default function Tibia74NonPvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-non-pvp-review" />;
}
