import Tibia80WithReviewsClientKeywordPage, { generateMetadata } from './tibia-8-0-with-reviews-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithReviewsClientKeywordPage />;
}
