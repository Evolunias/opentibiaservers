import Tibia84WithReviewsServersKeywordPage, { generateMetadata } from './tibia-8-4-with-reviews-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithReviewsServersKeywordPage />;
}
