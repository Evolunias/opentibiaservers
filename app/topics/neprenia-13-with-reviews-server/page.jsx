import Neprenia13WithReviewsServerKeywordPage, { generateMetadata } from './neprenia-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia13WithReviewsServerKeywordPage />;
}
