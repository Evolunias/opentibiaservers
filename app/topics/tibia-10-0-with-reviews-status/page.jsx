import Tibia100WithReviewsStatusKeywordPage, { generateMetadata } from './tibia-10-0-with-reviews-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithReviewsStatusKeywordPage />;
}
