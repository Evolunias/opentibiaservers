import Tibia71WithReviewsPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-1-with-reviews-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithReviewsPlayersOnlineKeywordPage />;
}
