import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-reviews-players-online');
}

export default function Tibia772WithReviewsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-reviews-players-online" />;
}
