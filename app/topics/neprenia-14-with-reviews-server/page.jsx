import Neprenia14WithReviewsServerKeywordPage, { generateMetadata } from './neprenia-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia14WithReviewsServerKeywordPage />;
}
