import Tibianus71WithReviewsServerKeywordPage, { generateMetadata } from './tibianus-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus71WithReviewsServerKeywordPage />;
}
