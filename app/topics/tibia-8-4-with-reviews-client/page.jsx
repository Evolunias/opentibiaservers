import Tibia84WithReviewsClientKeywordPage, { generateMetadata } from './tibia-8-4-with-reviews-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithReviewsClientKeywordPage />;
}
