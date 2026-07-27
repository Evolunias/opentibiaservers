import Tibia13WithReviewsStatusKeywordPage, { generateMetadata } from './tibia-13-with-reviews-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithReviewsStatusKeywordPage />;
}
