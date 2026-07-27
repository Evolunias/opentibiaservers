import Tibia13WithReviewsClientKeywordPage, { generateMetadata } from './tibia-13-with-reviews-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithReviewsClientKeywordPage />;
}
