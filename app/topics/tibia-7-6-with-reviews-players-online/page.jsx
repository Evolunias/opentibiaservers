import Tibia76WithReviewsPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-6-with-reviews-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithReviewsPlayersOnlineKeywordPage />;
}
