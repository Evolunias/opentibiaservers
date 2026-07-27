import Tibia81WithReviewsPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-1-with-reviews-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithReviewsPlayersOnlineKeywordPage />;
}
