import Blazera96WithReviewsServerKeywordPage, { generateMetadata } from './blazera-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera96WithReviewsServerKeywordPage />;
}
