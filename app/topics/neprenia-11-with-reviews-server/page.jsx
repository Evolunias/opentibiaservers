import Neprenia11WithReviewsServerKeywordPage, { generateMetadata } from './neprenia-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia11WithReviewsServerKeywordPage />;
}
