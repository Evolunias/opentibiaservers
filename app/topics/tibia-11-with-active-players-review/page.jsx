import Tibia11WithActivePlayersReviewKeywordPage, { generateMetadata } from './tibia-11-with-active-players-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithActivePlayersReviewKeywordPage />;
}
