import Blazera80WithReviewsServerKeywordPage, { generateMetadata } from './blazera-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera80WithReviewsServerKeywordPage />;
}
