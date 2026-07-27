import Eldera12WithReviewsServerKeywordPage, { generateMetadata } from './eldera-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera12WithReviewsServerKeywordPage />;
}
