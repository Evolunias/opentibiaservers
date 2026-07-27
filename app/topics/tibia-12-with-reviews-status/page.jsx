import Tibia12WithReviewsStatusKeywordPage, { generateMetadata } from './tibia-12-with-reviews-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithReviewsStatusKeywordPage />;
}
