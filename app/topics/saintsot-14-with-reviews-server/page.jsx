import Saintsot14WithReviewsServerKeywordPage, { generateMetadata } from './saintsot-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot14WithReviewsServerKeywordPage />;
}
