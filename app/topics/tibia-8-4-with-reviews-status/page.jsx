import Tibia84WithReviewsStatusKeywordPage, { generateMetadata } from './tibia-8-4-with-reviews-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithReviewsStatusKeywordPage />;
}
