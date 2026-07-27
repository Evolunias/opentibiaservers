import Tibiame12WithReviewsServerKeywordPage, { generateMetadata } from './tibiame-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame12WithReviewsServerKeywordPage />;
}
