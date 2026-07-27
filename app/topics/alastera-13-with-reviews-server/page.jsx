import Alastera13WithReviewsServerKeywordPage, { generateMetadata } from './alastera-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13WithReviewsServerKeywordPage />;
}
