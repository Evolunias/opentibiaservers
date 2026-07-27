import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-non-pvp-review');
}

export default function Tibia71NonPvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-non-pvp-review" />;
}
