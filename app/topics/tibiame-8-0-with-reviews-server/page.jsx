import Tibiame80WithReviewsServerKeywordPage, { generateMetadata } from './tibiame-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame80WithReviewsServerKeywordPage />;
}
