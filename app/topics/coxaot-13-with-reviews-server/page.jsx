import Coxaot13WithReviewsServerKeywordPage, { generateMetadata } from './coxaot-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot13WithReviewsServerKeywordPage />;
}
