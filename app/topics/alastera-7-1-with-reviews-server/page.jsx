import Alastera71WithReviewsServerKeywordPage, { generateMetadata } from './alastera-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera71WithReviewsServerKeywordPage />;
}
