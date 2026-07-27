import Cyntara80WithReviewsServerKeywordPage, { generateMetadata } from './cyntara-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara80WithReviewsServerKeywordPage />;
}
