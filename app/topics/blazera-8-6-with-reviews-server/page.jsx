import Blazera86WithReviewsServerKeywordPage, { generateMetadata } from './blazera-8-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera86WithReviewsServerKeywordPage />;
}
