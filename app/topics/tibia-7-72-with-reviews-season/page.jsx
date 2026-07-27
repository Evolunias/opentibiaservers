import Tibia772WithReviewsSeasonKeywordPage, { generateMetadata } from './tibia-7-72-with-reviews-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithReviewsSeasonKeywordPage />;
}
