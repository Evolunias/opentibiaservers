import FunServerReviewsKeywordPage, { generateMetadata } from './fun-server-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerReviewsKeywordPage />;
}
