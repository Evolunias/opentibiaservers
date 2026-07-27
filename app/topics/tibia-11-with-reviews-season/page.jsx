import Tibia11WithReviewsSeasonKeywordPage, { generateMetadata } from './tibia-11-with-reviews-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithReviewsSeasonKeywordPage />;
}
