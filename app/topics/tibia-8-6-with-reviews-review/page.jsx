import Tibia86WithReviewsReviewKeywordPage, { generateMetadata } from './tibia-8-6-with-reviews-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithReviewsReviewKeywordPage />;
}
