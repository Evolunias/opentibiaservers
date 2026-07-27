import Tibia84WithReviewsReviewKeywordPage, { generateMetadata } from './tibia-8-4-with-reviews-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithReviewsReviewKeywordPage />;
}
