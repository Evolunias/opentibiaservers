import Eldera96WithReviewsServerKeywordPage, { generateMetadata } from './eldera-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera96WithReviewsServerKeywordPage />;
}
