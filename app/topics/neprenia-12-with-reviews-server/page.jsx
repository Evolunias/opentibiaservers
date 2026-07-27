import Neprenia12WithReviewsServerKeywordPage, { generateMetadata } from './neprenia-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia12WithReviewsServerKeywordPage />;
}
