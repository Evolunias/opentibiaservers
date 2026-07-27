import Neprenia96WithReviewsServerKeywordPage, { generateMetadata } from './neprenia-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia96WithReviewsServerKeywordPage />;
}
