import Realera15WithReviewsServerKeywordPage, { generateMetadata } from './realera-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera15WithReviewsServerKeywordPage />;
}
