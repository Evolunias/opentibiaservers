import Tibia76WithReviewsClientKeywordPage, { generateMetadata } from './tibia-7-6-with-reviews-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithReviewsClientKeywordPage />;
}
