import Marolaot13WithReviewsServerKeywordPage, { generateMetadata } from './marolaot-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot13WithReviewsServerKeywordPage />;
}
