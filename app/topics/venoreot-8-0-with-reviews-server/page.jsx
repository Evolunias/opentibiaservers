import Venoreot80WithReviewsServerKeywordPage, { generateMetadata } from './venoreot-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot80WithReviewsServerKeywordPage />;
}
