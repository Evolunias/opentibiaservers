import CyntaraWithReviewsServerUkKeywordPage, { generateMetadata } from './cyntara-with-reviews-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraWithReviewsServerUkKeywordPage />;
}
