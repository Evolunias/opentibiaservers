import Venoreot14WithReviewsServerKeywordPage, { generateMetadata } from './venoreot-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot14WithReviewsServerKeywordPage />;
}
