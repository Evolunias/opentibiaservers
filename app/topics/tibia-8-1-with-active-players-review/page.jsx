import Tibia81WithActivePlayersReviewKeywordPage, { generateMetadata } from './tibia-8-1-with-active-players-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithActivePlayersReviewKeywordPage />;
}
