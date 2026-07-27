import Eldera14WithReviewsServerKeywordPage, { generateMetadata } from './eldera-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera14WithReviewsServerKeywordPage />;
}
