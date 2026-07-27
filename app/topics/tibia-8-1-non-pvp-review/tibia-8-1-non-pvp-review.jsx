import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-non-pvp-review');
}

export default function Tibia81NonPvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-non-pvp-review" />;
}
