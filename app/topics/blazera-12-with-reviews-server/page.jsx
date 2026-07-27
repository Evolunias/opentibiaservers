import Blazera12WithReviewsServerKeywordPage, { generateMetadata } from './blazera-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera12WithReviewsServerKeywordPage />;
}
