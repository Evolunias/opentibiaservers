import Eldera84WithReviewsServerKeywordPage, { generateMetadata } from './eldera-8-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera84WithReviewsServerKeywordPage />;
}
