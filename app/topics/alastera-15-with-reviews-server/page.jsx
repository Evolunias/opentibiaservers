import Alastera15WithReviewsServerKeywordPage, { generateMetadata } from './alastera-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15WithReviewsServerKeywordPage />;
}
