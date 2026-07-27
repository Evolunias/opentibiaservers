import Tibia14WithReviewsClientKeywordPage, { generateMetadata } from './tibia-14-with-reviews-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithReviewsClientKeywordPage />;
}
