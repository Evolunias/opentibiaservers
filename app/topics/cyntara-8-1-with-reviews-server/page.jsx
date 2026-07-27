import Cyntara81WithReviewsServerKeywordPage, { generateMetadata } from './cyntara-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara81WithReviewsServerKeywordPage />;
}
