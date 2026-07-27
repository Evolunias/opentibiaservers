import Tibia100WithActivePlayersReviewKeywordPage, { generateMetadata } from './tibia-10-0-with-active-players-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithActivePlayersReviewKeywordPage />;
}
