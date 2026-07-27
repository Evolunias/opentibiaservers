import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-non-pvp-review');
}

export default function Tibia15NonPvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-non-pvp-review" />;
}
