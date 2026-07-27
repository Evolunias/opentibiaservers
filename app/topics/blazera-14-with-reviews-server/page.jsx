import Blazera14WithReviewsServerKeywordPage, { generateMetadata } from './blazera-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera14WithReviewsServerKeywordPage />;
}
