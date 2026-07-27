import Tibianus12WithReviewsServerKeywordPage, { generateMetadata } from './tibianus-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus12WithReviewsServerKeywordPage />;
}
