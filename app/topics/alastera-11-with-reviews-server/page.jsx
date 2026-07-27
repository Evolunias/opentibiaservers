import Alastera11WithReviewsServerKeywordPage, { generateMetadata } from './alastera-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera11WithReviewsServerKeywordPage />;
}
