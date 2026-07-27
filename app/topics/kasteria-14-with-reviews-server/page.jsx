import Kasteria14WithReviewsServerKeywordPage, { generateMetadata } from './kasteria-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria14WithReviewsServerKeywordPage />;
}
