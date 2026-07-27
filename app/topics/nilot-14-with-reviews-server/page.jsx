import Nilot14WithReviewsServerKeywordPage, { generateMetadata } from './nilot-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot14WithReviewsServerKeywordPage />;
}
