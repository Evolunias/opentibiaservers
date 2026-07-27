import Cyntara12WithReviewsServerKeywordPage, { generateMetadata } from './cyntara-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara12WithReviewsServerKeywordPage />;
}
