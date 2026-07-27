import Miracle12WithReviewsServerKeywordPage, { generateMetadata } from './miracle-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle12WithReviewsServerKeywordPage />;
}
