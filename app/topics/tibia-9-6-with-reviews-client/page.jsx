import Tibia96WithReviewsClientKeywordPage, { generateMetadata } from './tibia-9-6-with-reviews-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithReviewsClientKeywordPage />;
}
