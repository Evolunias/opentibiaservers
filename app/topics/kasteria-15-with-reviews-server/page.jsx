import Kasteria15WithReviewsServerKeywordPage, { generateMetadata } from './kasteria-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria15WithReviewsServerKeywordPage />;
}
