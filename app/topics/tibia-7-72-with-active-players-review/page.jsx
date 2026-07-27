import Tibia772WithActivePlayersReviewKeywordPage, { generateMetadata } from './tibia-7-72-with-active-players-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithActivePlayersReviewKeywordPage />;
}
