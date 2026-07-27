import Cyntara96WithReviewsServerKeywordPage, { generateMetadata } from './cyntara-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara96WithReviewsServerKeywordPage />;
}
