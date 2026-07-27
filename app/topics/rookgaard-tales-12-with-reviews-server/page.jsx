import RookgaardTales12WithReviewsServerKeywordPage, { generateMetadata } from './rookgaard-tales-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales12WithReviewsServerKeywordPage />;
}
