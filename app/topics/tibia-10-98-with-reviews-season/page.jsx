import Tibia1098WithReviewsSeasonKeywordPage, { generateMetadata } from './tibia-10-98-with-reviews-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithReviewsSeasonKeywordPage />;
}
