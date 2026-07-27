import Neprenia15WithReviewsServerKeywordPage, { generateMetadata } from './neprenia-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia15WithReviewsServerKeywordPage />;
}
