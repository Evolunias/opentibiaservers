import Tibiame71WithReviewsServerKeywordPage, { generateMetadata } from './tibiame-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame71WithReviewsServerKeywordPage />;
}
