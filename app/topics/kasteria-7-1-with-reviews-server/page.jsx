import Kasteria71WithReviewsServerKeywordPage, { generateMetadata } from './kasteria-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria71WithReviewsServerKeywordPage />;
}
