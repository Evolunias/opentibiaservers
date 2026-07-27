import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-reviews-players-online');
}

export default function Tibia11WithReviewsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-reviews-players-online" />;
}
