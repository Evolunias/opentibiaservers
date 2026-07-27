import Oldera86WithReviewsServerKeywordPage, { generateMetadata } from './oldera-8-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera86WithReviewsServerKeywordPage />;
}
