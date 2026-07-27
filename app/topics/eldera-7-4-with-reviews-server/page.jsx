import Eldera74WithReviewsServerKeywordPage, { generateMetadata } from './eldera-7-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera74WithReviewsServerKeywordPage />;
}
