import Tibianus100WithReviewsServerKeywordPage, { generateMetadata } from './tibianus-10-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus100WithReviewsServerKeywordPage />;
}
