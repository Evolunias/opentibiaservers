import Tibia12WithReviewsPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-with-reviews-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithReviewsPlayersOnlineKeywordPage />;
}
