import Marolaot12WithReviewsServerKeywordPage, { generateMetadata } from './marolaot-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot12WithReviewsServerKeywordPage />;
}
