import Tibia12WithReviewsClientKeywordPage, { generateMetadata } from './tibia-12-with-reviews-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithReviewsClientKeywordPage />;
}
