import Kasteria100WithReviewsServerKeywordPage, { generateMetadata } from './kasteria-10-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria100WithReviewsServerKeywordPage />;
}
