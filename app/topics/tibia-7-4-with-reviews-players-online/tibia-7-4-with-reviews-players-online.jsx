import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-reviews-players-online');
}

export default function Tibia74WithReviewsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-reviews-players-online" />;
}
