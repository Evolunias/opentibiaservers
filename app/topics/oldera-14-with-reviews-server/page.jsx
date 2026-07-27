import Oldera14WithReviewsServerKeywordPage, { generateMetadata } from './oldera-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera14WithReviewsServerKeywordPage />;
}
