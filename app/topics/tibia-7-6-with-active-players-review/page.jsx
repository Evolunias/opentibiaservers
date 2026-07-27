import Tibia76WithActivePlayersReviewKeywordPage, { generateMetadata } from './tibia-7-6-with-active-players-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithActivePlayersReviewKeywordPage />;
}
