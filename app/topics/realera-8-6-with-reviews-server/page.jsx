import Realera86WithReviewsServerKeywordPage, { generateMetadata } from './realera-8-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera86WithReviewsServerKeywordPage />;
}
