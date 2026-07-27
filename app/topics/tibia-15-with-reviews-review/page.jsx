import Tibia15WithReviewsReviewKeywordPage, { generateMetadata } from './tibia-15-with-reviews-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithReviewsReviewKeywordPage />;
}
