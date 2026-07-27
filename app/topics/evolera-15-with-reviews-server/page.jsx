import Evolera15WithReviewsServerKeywordPage, { generateMetadata } from './evolera-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera15WithReviewsServerKeywordPage />;
}
