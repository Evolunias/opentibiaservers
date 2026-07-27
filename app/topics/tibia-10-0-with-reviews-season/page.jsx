import Tibia100WithReviewsSeasonKeywordPage, { generateMetadata } from './tibia-10-0-with-reviews-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithReviewsSeasonKeywordPage />;
}
