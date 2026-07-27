import Kasteria74WithReviewsServerKeywordPage, { generateMetadata } from './kasteria-7-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria74WithReviewsServerKeywordPage />;
}
