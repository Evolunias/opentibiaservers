import Tibia15WithReviewsStatusKeywordPage, { generateMetadata } from './tibia-15-with-reviews-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithReviewsStatusKeywordPage />;
}
