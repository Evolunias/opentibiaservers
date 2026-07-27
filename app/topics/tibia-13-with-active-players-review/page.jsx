import Tibia13WithActivePlayersReviewKeywordPage, { generateMetadata } from './tibia-13-with-active-players-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithActivePlayersReviewKeywordPage />;
}
