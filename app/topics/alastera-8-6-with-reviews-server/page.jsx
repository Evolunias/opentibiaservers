import Alastera86WithReviewsServerKeywordPage, { generateMetadata } from './alastera-8-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera86WithReviewsServerKeywordPage />;
}
