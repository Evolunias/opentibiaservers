import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-reviews-players-online');
}

export default function Tibia76WithReviewsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-reviews-players-online" />;
}
