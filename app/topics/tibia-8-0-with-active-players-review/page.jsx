import Tibia80WithActivePlayersReviewKeywordPage, { generateMetadata } from './tibia-8-0-with-active-players-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithActivePlayersReviewKeywordPage />;
}
