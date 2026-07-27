import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-reviews-players-online');
}

export default function Tibia854WithReviewsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-reviews-players-online" />;
}
