import Realera80WithReviewsServerKeywordPage, { generateMetadata } from './realera-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera80WithReviewsServerKeywordPage />;
}
