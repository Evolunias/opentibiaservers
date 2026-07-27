import Miracle14WithReviewsServerKeywordPage, { generateMetadata } from './miracle-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle14WithReviewsServerKeywordPage />;
}
