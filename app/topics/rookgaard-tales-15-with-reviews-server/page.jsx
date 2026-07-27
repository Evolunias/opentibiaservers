import RookgaardTales15WithReviewsServerKeywordPage, { generateMetadata } from './rookgaard-tales-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales15WithReviewsServerKeywordPage />;
}
