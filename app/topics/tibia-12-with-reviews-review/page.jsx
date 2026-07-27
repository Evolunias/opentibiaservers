import Tibia12WithReviewsReviewKeywordPage, { generateMetadata } from './tibia-12-with-reviews-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithReviewsReviewKeywordPage />;
}
