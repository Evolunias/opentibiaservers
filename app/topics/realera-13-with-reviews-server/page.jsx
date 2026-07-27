import Realera13WithReviewsServerKeywordPage, { generateMetadata } from './realera-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera13WithReviewsServerKeywordPage />;
}
