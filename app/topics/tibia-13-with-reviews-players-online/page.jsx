import Tibia13WithReviewsPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-with-reviews-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithReviewsPlayersOnlineKeywordPage />;
}
