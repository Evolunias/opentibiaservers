import Tibia1098WithReviewsReviewKeywordPage, { generateMetadata } from './tibia-10-98-with-reviews-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithReviewsReviewKeywordPage />;
}
