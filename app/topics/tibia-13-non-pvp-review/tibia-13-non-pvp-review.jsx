import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-non-pvp-review');
}

export default function Tibia13NonPvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-non-pvp-review" />;
}
