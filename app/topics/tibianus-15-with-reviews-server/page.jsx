import Tibianus15WithReviewsServerKeywordPage, { generateMetadata } from './tibianus-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus15WithReviewsServerKeywordPage />;
}
