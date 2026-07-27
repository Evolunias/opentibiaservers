import Tibia80WithReviewsOtServerKeywordPage, { generateMetadata } from './tibia-8-0-with-reviews-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithReviewsOtServerKeywordPage />;
}
