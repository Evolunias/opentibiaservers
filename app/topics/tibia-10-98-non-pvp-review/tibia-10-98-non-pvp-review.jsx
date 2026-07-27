import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-non-pvp-review');
}

export default function Tibia1098NonPvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-non-pvp-review" />;
}
