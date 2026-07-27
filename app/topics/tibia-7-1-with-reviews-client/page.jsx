import Tibia71WithReviewsClientKeywordPage, { generateMetadata } from './tibia-7-1-with-reviews-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithReviewsClientKeywordPage />;
}
