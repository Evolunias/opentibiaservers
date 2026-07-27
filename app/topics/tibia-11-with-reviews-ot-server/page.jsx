import Tibia11WithReviewsOtServerKeywordPage, { generateMetadata } from './tibia-11-with-reviews-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithReviewsOtServerKeywordPage />;
}
