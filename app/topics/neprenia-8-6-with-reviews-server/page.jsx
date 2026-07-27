import Neprenia86WithReviewsServerKeywordPage, { generateMetadata } from './neprenia-8-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia86WithReviewsServerKeywordPage />;
}
