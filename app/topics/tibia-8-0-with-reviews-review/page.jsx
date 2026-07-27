import Tibia80WithReviewsReviewKeywordPage, { generateMetadata } from './tibia-8-0-with-reviews-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithReviewsReviewKeywordPage />;
}
