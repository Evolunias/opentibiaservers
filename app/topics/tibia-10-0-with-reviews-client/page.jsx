import Tibia100WithReviewsClientKeywordPage, { generateMetadata } from './tibia-10-0-with-reviews-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithReviewsClientKeywordPage />;
}
