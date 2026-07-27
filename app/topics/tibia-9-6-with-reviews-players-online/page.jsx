import Tibia96WithReviewsPlayersOnlineKeywordPage, { generateMetadata } from './tibia-9-6-with-reviews-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithReviewsPlayersOnlineKeywordPage />;
}
