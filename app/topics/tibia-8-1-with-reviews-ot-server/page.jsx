import Tibia81WithReviewsOtServerKeywordPage, { generateMetadata } from './tibia-8-1-with-reviews-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithReviewsOtServerKeywordPage />;
}
