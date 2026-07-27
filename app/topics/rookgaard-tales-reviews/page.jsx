import RookgaardTalesReviewsKeywordPage, { generateMetadata } from './rookgaard-tales-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesReviewsKeywordPage />;
}
