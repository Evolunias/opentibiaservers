import Tibia1098WithReviewsClientKeywordPage, { generateMetadata } from './tibia-10-98-with-reviews-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithReviewsClientKeywordPage />;
}
