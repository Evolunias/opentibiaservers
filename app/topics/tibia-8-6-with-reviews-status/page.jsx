import Tibia86WithReviewsStatusKeywordPage, { generateMetadata } from './tibia-8-6-with-reviews-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithReviewsStatusKeywordPage />;
}
