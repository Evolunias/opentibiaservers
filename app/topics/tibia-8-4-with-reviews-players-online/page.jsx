import Tibia84WithReviewsPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-4-with-reviews-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithReviewsPlayersOnlineKeywordPage />;
}
