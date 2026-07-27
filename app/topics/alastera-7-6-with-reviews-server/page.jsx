import Alastera76WithReviewsServerKeywordPage, { generateMetadata } from './alastera-7-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera76WithReviewsServerKeywordPage />;
}
