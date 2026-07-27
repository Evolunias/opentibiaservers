import Tibia11WithReviewsReviewKeywordPage, { generateMetadata } from './tibia-11-with-reviews-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithReviewsReviewKeywordPage />;
}
