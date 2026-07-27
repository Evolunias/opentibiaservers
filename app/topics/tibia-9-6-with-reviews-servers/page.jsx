import Tibia96WithReviewsServersKeywordPage, { generateMetadata } from './tibia-9-6-with-reviews-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithReviewsServersKeywordPage />;
}
