import Tibia74WithReviewsPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-4-with-reviews-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithReviewsPlayersOnlineKeywordPage />;
}
