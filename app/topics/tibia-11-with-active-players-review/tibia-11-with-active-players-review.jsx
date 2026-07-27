import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-active-players-review');
}

export default function Tibia11WithActivePlayersReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-active-players-review" />;
}
