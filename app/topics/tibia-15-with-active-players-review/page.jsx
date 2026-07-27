import Tibia15WithActivePlayersReviewKeywordPage, { generateMetadata } from './tibia-15-with-active-players-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithActivePlayersReviewKeywordPage />;
}
