import Tibia71WithReviewsServersKeywordPage, { generateMetadata } from './tibia-7-1-with-reviews-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithReviewsServersKeywordPage />;
}
