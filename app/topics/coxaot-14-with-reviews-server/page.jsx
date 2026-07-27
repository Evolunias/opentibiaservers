import Coxaot14WithReviewsServerKeywordPage, { generateMetadata } from './coxaot-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot14WithReviewsServerKeywordPage />;
}
