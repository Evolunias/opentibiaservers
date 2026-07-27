import Tibia80WithReviewsPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-0-with-reviews-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithReviewsPlayersOnlineKeywordPage />;
}
