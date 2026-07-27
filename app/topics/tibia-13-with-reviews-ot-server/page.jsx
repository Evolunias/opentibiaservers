import Tibia13WithReviewsOtServerKeywordPage, { generateMetadata } from './tibia-13-with-reviews-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithReviewsOtServerKeywordPage />;
}
