import Realera12WithReviewsServerKeywordPage, { generateMetadata } from './realera-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera12WithReviewsServerKeywordPage />;
}
