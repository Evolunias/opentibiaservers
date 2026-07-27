import Tibia86WithReviewsSeasonKeywordPage, { generateMetadata } from './tibia-8-6-with-reviews-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithReviewsSeasonKeywordPage />;
}
