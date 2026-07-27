import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-non-pvp-review');
}

export default function Tibia14NonPvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-non-pvp-review" />;
}
