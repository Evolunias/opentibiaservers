import Coxaot15WithReviewsServerKeywordPage, { generateMetadata } from './coxaot-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot15WithReviewsServerKeywordPage />;
}
