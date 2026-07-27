import Marolaot15WithReviewsServerKeywordPage, { generateMetadata } from './marolaot-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot15WithReviewsServerKeywordPage />;
}
