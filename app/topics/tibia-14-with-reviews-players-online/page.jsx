import Tibia14WithReviewsPlayersOnlineKeywordPage, { generateMetadata } from './tibia-14-with-reviews-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithReviewsPlayersOnlineKeywordPage />;
}
