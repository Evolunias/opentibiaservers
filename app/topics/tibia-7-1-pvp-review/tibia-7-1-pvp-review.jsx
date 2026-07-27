import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvp-review');
}

export default function Tibia71PvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvp-review" />;
}
