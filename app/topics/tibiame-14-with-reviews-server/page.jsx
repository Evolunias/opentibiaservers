import Tibiame14WithReviewsServerKeywordPage, { generateMetadata } from './tibiame-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame14WithReviewsServerKeywordPage />;
}
