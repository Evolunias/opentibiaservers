import Eldera15WithReviewsServerKeywordPage, { generateMetadata } from './eldera-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera15WithReviewsServerKeywordPage />;
}
