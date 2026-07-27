import Tibia12WithReviewsSeasonKeywordPage, { generateMetadata } from './tibia-12-with-reviews-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithReviewsSeasonKeywordPage />;
}
