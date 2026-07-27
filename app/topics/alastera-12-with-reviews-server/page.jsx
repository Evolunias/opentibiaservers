import Alastera12WithReviewsServerKeywordPage, { generateMetadata } from './alastera-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12WithReviewsServerKeywordPage />;
}
