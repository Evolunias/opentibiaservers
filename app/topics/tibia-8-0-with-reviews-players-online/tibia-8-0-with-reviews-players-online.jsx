import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-reviews-players-online');
}

export default function Tibia80WithReviewsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-reviews-players-online" />;
}
