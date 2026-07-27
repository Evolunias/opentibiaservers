import Miracle15WithReviewsServerKeywordPage, { generateMetadata } from './miracle-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle15WithReviewsServerKeywordPage />;
}
