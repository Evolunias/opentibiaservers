import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-review');
}

export default function Tibia100PvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-review" />;
}
