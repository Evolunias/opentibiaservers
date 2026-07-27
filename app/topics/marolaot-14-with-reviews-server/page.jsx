import Marolaot14WithReviewsServerKeywordPage, { generateMetadata } from './marolaot-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot14WithReviewsServerKeywordPage />;
}
