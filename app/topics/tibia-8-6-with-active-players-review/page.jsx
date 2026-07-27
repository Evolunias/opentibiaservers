import Tibia86WithActivePlayersReviewKeywordPage, { generateMetadata } from './tibia-8-6-with-active-players-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithActivePlayersReviewKeywordPage />;
}
