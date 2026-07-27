import Tibianus13WithReviewsServerKeywordPage, { generateMetadata } from './tibianus-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus13WithReviewsServerKeywordPage />;
}
