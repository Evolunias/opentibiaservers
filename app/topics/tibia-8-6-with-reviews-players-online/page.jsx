import Tibia86WithReviewsPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-6-with-reviews-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithReviewsPlayersOnlineKeywordPage />;
}
