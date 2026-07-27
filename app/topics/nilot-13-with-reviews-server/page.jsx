import Nilot13WithReviewsServerKeywordPage, { generateMetadata } from './nilot-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot13WithReviewsServerKeywordPage />;
}
