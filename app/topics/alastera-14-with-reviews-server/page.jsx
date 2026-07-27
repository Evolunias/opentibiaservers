import Alastera14WithReviewsServerKeywordPage, { generateMetadata } from './alastera-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera14WithReviewsServerKeywordPage />;
}
