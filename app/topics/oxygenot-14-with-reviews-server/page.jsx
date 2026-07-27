import Oxygenot14WithReviewsServerKeywordPage, { generateMetadata } from './oxygenot-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot14WithReviewsServerKeywordPage />;
}
