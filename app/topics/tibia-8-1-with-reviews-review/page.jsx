import Tibia81WithReviewsReviewKeywordPage, { generateMetadata } from './tibia-8-1-with-reviews-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithReviewsReviewKeywordPage />;
}
