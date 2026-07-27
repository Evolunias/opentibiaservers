import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-active-players-review');
}

export default function Tibia100WithActivePlayersReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-active-players-review" />;
}
