import Tibia96WithActivePlayersReviewKeywordPage, { generateMetadata } from './tibia-9-6-with-active-players-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithActivePlayersReviewKeywordPage />;
}
