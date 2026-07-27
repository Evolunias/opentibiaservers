import Tibia1098WithReviewsStatusKeywordPage, { generateMetadata } from './tibia-10-98-with-reviews-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithReviewsStatusKeywordPage />;
}
