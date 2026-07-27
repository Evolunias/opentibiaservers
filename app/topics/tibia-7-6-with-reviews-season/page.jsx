import Tibia76WithReviewsSeasonKeywordPage, { generateMetadata } from './tibia-7-6-with-reviews-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithReviewsSeasonKeywordPage />;
}
