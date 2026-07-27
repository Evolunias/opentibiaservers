import Tibia71WithReviewsStatusKeywordPage, { generateMetadata } from './tibia-7-1-with-reviews-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithReviewsStatusKeywordPage />;
}
