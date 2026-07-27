import Cyntara86WithReviewsServerKeywordPage, { generateMetadata } from './cyntara-8-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara86WithReviewsServerKeywordPage />;
}
