import Kasteria11WithReviewsServerKeywordPage, { generateMetadata } from './kasteria-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11WithReviewsServerKeywordPage />;
}
