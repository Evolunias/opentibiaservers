import Tibia11WithReviewsPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-with-reviews-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithReviewsPlayersOnlineKeywordPage />;
}
