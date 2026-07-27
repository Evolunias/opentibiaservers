import Tibia772WithReviewsStatusKeywordPage, { generateMetadata } from './tibia-7-72-with-reviews-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithReviewsStatusKeywordPage />;
}
