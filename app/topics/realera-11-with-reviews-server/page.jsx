import Realera11WithReviewsServerKeywordPage, { generateMetadata } from './realera-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera11WithReviewsServerKeywordPage />;
}
