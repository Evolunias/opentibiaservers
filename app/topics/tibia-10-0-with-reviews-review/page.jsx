import Tibia100WithReviewsReviewKeywordPage, { generateMetadata } from './tibia-10-0-with-reviews-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithReviewsReviewKeywordPage />;
}
