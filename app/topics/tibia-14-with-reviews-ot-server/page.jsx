import Tibia14WithReviewsOtServerKeywordPage, { generateMetadata } from './tibia-14-with-reviews-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithReviewsOtServerKeywordPage />;
}
