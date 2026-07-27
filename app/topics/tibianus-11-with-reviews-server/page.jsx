import Tibianus11WithReviewsServerKeywordPage, { generateMetadata } from './tibianus-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus11WithReviewsServerKeywordPage />;
}
