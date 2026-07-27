import Tibia12WithActivePlayersReviewKeywordPage, { generateMetadata } from './tibia-12-with-active-players-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithActivePlayersReviewKeywordPage />;
}
