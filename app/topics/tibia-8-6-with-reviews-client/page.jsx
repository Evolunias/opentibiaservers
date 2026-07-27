import Tibia86WithReviewsClientKeywordPage, { generateMetadata } from './tibia-8-6-with-reviews-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithReviewsClientKeywordPage />;
}
