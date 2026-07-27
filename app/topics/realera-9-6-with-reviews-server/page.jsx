import Realera96WithReviewsServerKeywordPage, { generateMetadata } from './realera-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera96WithReviewsServerKeywordPage />;
}
