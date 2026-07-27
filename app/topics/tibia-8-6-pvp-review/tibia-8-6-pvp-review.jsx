import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-review');
}

export default function Tibia86PvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-review" />;
}
