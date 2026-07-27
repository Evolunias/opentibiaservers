import Tibia80WithReviewsStatusKeywordPage, { generateMetadata } from './tibia-8-0-with-reviews-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithReviewsStatusKeywordPage />;
}
