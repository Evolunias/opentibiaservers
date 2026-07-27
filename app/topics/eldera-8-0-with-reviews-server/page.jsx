import Eldera80WithReviewsServerKeywordPage, { generateMetadata } from './eldera-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera80WithReviewsServerKeywordPage />;
}
