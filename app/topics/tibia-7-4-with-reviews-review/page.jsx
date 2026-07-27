import Tibia74WithReviewsReviewKeywordPage, { generateMetadata } from './tibia-7-4-with-reviews-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithReviewsReviewKeywordPage />;
}
