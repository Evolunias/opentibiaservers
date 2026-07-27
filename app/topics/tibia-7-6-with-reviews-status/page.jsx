import Tibia76WithReviewsStatusKeywordPage, { generateMetadata } from './tibia-7-6-with-reviews-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithReviewsStatusKeywordPage />;
}
