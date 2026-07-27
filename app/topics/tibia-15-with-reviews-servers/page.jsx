import Tibia15WithReviewsServersKeywordPage, { generateMetadata } from './tibia-15-with-reviews-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithReviewsServersKeywordPage />;
}
