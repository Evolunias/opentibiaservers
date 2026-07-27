import Tibia12WithReviewsServersKeywordPage, { generateMetadata } from './tibia-12-with-reviews-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithReviewsServersKeywordPage />;
}
