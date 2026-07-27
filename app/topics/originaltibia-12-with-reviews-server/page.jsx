import Originaltibia12WithReviewsServerKeywordPage, { generateMetadata } from './originaltibia-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Originaltibia12WithReviewsServerKeywordPage />;
}
