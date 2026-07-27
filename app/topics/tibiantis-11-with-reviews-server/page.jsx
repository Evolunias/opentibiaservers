import Tibiantis11WithReviewsServerKeywordPage, { generateMetadata } from './tibiantis-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis11WithReviewsServerKeywordPage />;
}
