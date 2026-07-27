import Thaisot15WithReviewsServerKeywordPage, { generateMetadata } from './thaisot-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot15WithReviewsServerKeywordPage />;
}
