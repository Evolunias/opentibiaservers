import Tibia12WithReviewsOtServerKeywordPage, { generateMetadata } from './tibia-12-with-reviews-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithReviewsOtServerKeywordPage />;
}
