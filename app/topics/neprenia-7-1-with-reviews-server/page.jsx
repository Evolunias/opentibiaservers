import Neprenia71WithReviewsServerKeywordPage, { generateMetadata } from './neprenia-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia71WithReviewsServerKeywordPage />;
}
