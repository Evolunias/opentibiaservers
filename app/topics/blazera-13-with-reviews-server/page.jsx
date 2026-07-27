import Blazera13WithReviewsServerKeywordPage, { generateMetadata } from './blazera-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera13WithReviewsServerKeywordPage />;
}
