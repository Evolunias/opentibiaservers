import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-non-pvp-review');
}

export default function Tibia86NonPvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-non-pvp-review" />;
}
