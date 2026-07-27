import Blazera15WithReviewsServerKeywordPage, { generateMetadata } from './blazera-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera15WithReviewsServerKeywordPage />;
}
