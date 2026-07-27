import Tibia76WithReviewsServersKeywordPage, { generateMetadata } from './tibia-7-6-with-reviews-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithReviewsServersKeywordPage />;
}
