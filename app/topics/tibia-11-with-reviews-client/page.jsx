import Tibia11WithReviewsClientKeywordPage, { generateMetadata } from './tibia-11-with-reviews-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithReviewsClientKeywordPage />;
}
