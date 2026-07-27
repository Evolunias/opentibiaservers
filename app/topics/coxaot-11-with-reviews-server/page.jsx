import Coxaot11WithReviewsServerKeywordPage, { generateMetadata } from './coxaot-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot11WithReviewsServerKeywordPage />;
}
