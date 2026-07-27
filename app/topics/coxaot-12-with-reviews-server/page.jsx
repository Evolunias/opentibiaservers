import Coxaot12WithReviewsServerKeywordPage, { generateMetadata } from './coxaot-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot12WithReviewsServerKeywordPage />;
}
