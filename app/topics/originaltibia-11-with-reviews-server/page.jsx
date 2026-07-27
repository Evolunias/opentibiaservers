import Originaltibia11WithReviewsServerKeywordPage, { generateMetadata } from './originaltibia-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Originaltibia11WithReviewsServerKeywordPage />;
}
