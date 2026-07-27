import Tibianus14WithReviewsServerKeywordPage, { generateMetadata } from './tibianus-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus14WithReviewsServerKeywordPage />;
}
