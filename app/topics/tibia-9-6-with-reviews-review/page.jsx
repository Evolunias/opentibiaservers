import Tibia96WithReviewsReviewKeywordPage, { generateMetadata } from './tibia-9-6-with-reviews-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithReviewsReviewKeywordPage />;
}
