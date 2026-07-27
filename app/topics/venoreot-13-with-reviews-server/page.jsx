import Venoreot13WithReviewsServerKeywordPage, { generateMetadata } from './venoreot-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot13WithReviewsServerKeywordPage />;
}
