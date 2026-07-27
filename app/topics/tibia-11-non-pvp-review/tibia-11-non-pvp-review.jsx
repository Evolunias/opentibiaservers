import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-review');
}

export default function Tibia11NonPvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-review" />;
}
