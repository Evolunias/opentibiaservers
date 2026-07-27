import Tibia81WithReviewsSeasonKeywordPage, { generateMetadata } from './tibia-8-1-with-reviews-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithReviewsSeasonKeywordPage />;
}
