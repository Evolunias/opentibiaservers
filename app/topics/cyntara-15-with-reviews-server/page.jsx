import Cyntara15WithReviewsServerKeywordPage, { generateMetadata } from './cyntara-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara15WithReviewsServerKeywordPage />;
}
