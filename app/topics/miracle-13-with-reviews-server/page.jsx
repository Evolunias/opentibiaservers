import Miracle13WithReviewsServerKeywordPage, { generateMetadata } from './miracle-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle13WithReviewsServerKeywordPage />;
}
