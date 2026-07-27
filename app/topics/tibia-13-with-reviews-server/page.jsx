import Tibia13WithReviewsServerKeywordPage, { generateMetadata } from './tibia-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithReviewsServerKeywordPage />;
}
