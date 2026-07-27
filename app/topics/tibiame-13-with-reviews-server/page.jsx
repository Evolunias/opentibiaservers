import Tibiame13WithReviewsServerKeywordPage, { generateMetadata } from './tibiame-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame13WithReviewsServerKeywordPage />;
}
