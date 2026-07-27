import Tibia14WithReviewsReviewKeywordPage, { generateMetadata } from './tibia-14-with-reviews-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithReviewsReviewKeywordPage />;
}
