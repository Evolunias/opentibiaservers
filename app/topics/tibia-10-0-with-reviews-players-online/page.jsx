import Tibia100WithReviewsPlayersOnlineKeywordPage, { generateMetadata } from './tibia-10-0-with-reviews-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithReviewsPlayersOnlineKeywordPage />;
}
