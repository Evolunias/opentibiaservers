import WithReviewsRookgaardTalesKeywordPage, { generateMetadata } from './with-reviews-rookgaard-tales';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRookgaardTalesKeywordPage />;
}
