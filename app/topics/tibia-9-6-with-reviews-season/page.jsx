import Tibia96WithReviewsSeasonKeywordPage, { generateMetadata } from './tibia-9-6-with-reviews-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithReviewsSeasonKeywordPage />;
}
