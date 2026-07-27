import Realera14WithReviewsServerKeywordPage, { generateMetadata } from './realera-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera14WithReviewsServerKeywordPage />;
}
