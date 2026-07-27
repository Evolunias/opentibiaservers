import Tibia76WithReviewsServerKeywordPage, { generateMetadata } from './tibia-7-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithReviewsServerKeywordPage />;
}
