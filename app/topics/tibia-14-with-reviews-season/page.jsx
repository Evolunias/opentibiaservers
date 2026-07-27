import Tibia14WithReviewsSeasonKeywordPage, { generateMetadata } from './tibia-14-with-reviews-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithReviewsSeasonKeywordPage />;
}
