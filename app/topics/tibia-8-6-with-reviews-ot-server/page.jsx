import Tibia86WithReviewsOtServerKeywordPage, { generateMetadata } from './tibia-8-6-with-reviews-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithReviewsOtServerKeywordPage />;
}
