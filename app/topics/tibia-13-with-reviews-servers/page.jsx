import Tibia13WithReviewsServersKeywordPage, { generateMetadata } from './tibia-13-with-reviews-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithReviewsServersKeywordPage />;
}
