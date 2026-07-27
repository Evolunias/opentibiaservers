import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-active-players-review');
}

export default function Tibia81WithActivePlayersReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-active-players-review" />;
}
