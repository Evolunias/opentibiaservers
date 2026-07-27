import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-reviews-players-online');
}

export default function Tibia15WithReviewsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-reviews-players-online" />;
}
