import Tibia1098WithActivePlayersReviewKeywordPage, { generateMetadata } from './tibia-10-98-with-active-players-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithActivePlayersReviewKeywordPage />;
}
