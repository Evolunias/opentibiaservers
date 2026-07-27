import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-review');
}

export default function Tibia76PvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-review" />;
}
