import Tibia14WithReviewsServersKeywordPage, { generateMetadata } from './tibia-14-with-reviews-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithReviewsServersKeywordPage />;
}
