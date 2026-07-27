import Tibia71WithReviewsReviewKeywordPage, { generateMetadata } from './tibia-7-1-with-reviews-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithReviewsReviewKeywordPage />;
}
