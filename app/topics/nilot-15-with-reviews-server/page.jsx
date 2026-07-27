import Nilot15WithReviewsServerKeywordPage, { generateMetadata } from './nilot-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot15WithReviewsServerKeywordPage />;
}
