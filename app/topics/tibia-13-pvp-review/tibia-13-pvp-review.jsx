import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-review');
}

export default function Tibia13PvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-review" />;
}
