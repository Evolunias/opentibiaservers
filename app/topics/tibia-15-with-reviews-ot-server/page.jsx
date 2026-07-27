import Tibia15WithReviewsOtServerKeywordPage, { generateMetadata } from './tibia-15-with-reviews-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithReviewsOtServerKeywordPage />;
}
