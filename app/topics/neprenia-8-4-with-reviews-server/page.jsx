import Neprenia84WithReviewsServerKeywordPage, { generateMetadata } from './neprenia-8-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia84WithReviewsServerKeywordPage />;
}
