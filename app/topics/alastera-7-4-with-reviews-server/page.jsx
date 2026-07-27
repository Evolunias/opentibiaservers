import Alastera74WithReviewsServerKeywordPage, { generateMetadata } from './alastera-7-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera74WithReviewsServerKeywordPage />;
}
