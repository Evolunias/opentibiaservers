import Venoreot15WithReviewsServerKeywordPage, { generateMetadata } from './venoreot-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot15WithReviewsServerKeywordPage />;
}
