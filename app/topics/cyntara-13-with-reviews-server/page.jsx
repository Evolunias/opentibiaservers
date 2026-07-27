import Cyntara13WithReviewsServerKeywordPage, { generateMetadata } from './cyntara-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara13WithReviewsServerKeywordPage />;
}
