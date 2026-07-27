import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvp-review');
}

export default function Tibia854PvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvp-review" />;
}
