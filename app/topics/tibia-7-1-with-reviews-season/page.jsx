import Tibia71WithReviewsSeasonKeywordPage, { generateMetadata } from './tibia-7-1-with-reviews-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithReviewsSeasonKeywordPage />;
}
