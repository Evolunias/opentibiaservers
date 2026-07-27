import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-active-players-review');
}

export default function Tibia84WithActivePlayersReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-active-players-review" />;
}
