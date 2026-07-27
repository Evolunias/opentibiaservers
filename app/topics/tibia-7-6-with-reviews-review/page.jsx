import Tibia76WithReviewsReviewKeywordPage, { generateMetadata } from './tibia-7-6-with-reviews-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithReviewsReviewKeywordPage />;
}
