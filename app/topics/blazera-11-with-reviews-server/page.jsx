import Blazera11WithReviewsServerKeywordPage, { generateMetadata } from './blazera-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera11WithReviewsServerKeywordPage />;
}
