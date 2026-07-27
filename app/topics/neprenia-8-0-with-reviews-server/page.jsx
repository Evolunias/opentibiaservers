import Neprenia80WithReviewsServerKeywordPage, { generateMetadata } from './neprenia-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia80WithReviewsServerKeywordPage />;
}
