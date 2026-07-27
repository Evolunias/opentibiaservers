import Cyntara11WithReviewsServerKeywordPage, { generateMetadata } from './cyntara-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara11WithReviewsServerKeywordPage />;
}
