import Tibiame11WithReviewsServerKeywordPage, { generateMetadata } from './tibiame-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame11WithReviewsServerKeywordPage />;
}
