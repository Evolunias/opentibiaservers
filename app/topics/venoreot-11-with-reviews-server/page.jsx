import Venoreot11WithReviewsServerKeywordPage, { generateMetadata } from './venoreot-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot11WithReviewsServerKeywordPage />;
}
