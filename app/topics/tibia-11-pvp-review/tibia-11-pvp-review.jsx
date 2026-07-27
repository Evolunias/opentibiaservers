import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-review');
}

export default function Tibia11PvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-review" />;
}
