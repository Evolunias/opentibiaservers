import Kasteria12WithReviewsServerKeywordPage, { generateMetadata } from './kasteria-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria12WithReviewsServerKeywordPage />;
}
