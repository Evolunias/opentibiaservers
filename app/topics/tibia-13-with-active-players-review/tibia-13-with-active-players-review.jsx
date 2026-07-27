import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-active-players-review');
}

export default function Tibia13WithActivePlayersReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-active-players-review" />;
}
