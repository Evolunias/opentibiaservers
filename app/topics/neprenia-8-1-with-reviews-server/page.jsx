import Neprenia81WithReviewsServerKeywordPage, { generateMetadata } from './neprenia-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia81WithReviewsServerKeywordPage />;
}
