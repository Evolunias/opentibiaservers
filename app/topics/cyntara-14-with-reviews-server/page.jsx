import Cyntara14WithReviewsServerKeywordPage, { generateMetadata } from './cyntara-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara14WithReviewsServerKeywordPage />;
}
