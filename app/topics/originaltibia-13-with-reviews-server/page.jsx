import Originaltibia13WithReviewsServerKeywordPage, { generateMetadata } from './originaltibia-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Originaltibia13WithReviewsServerKeywordPage />;
}
