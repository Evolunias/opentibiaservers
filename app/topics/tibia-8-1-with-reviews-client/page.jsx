import Tibia81WithReviewsClientKeywordPage, { generateMetadata } from './tibia-8-1-with-reviews-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithReviewsClientKeywordPage />;
}
