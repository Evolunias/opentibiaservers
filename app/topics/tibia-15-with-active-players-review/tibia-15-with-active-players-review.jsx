import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-active-players-review');
}

export default function Tibia15WithActivePlayersReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-active-players-review" />;
}
