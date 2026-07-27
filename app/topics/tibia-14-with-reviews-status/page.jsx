import Tibia14WithReviewsStatusKeywordPage, { generateMetadata } from './tibia-14-with-reviews-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithReviewsStatusKeywordPage />;
}
