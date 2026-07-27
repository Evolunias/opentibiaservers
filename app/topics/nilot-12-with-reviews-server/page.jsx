import Nilot12WithReviewsServerKeywordPage, { generateMetadata } from './nilot-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot12WithReviewsServerKeywordPage />;
}
