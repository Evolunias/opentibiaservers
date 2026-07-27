import Tibia96WithReviewsOtServerKeywordPage, { generateMetadata } from './tibia-9-6-with-reviews-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithReviewsOtServerKeywordPage />;
}
