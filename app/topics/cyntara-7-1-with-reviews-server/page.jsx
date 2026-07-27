import Cyntara71WithReviewsServerKeywordPage, { generateMetadata } from './cyntara-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara71WithReviewsServerKeywordPage />;
}
