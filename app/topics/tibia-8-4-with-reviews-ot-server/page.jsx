import Tibia84WithReviewsOtServerKeywordPage, { generateMetadata } from './tibia-8-4-with-reviews-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithReviewsOtServerKeywordPage />;
}
