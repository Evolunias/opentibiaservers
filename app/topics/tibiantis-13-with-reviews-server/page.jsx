import Tibiantis13WithReviewsServerKeywordPage, { generateMetadata } from './tibiantis-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis13WithReviewsServerKeywordPage />;
}
