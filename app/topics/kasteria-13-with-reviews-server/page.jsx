import Kasteria13WithReviewsServerKeywordPage, { generateMetadata } from './kasteria-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria13WithReviewsServerKeywordPage />;
}
