import Alastera96WithReviewsServerKeywordPage, { generateMetadata } from './alastera-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96WithReviewsServerKeywordPage />;
}
