import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-reviews-players-online');
}

export default function Tibia13WithReviewsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-reviews-players-online" />;
}
