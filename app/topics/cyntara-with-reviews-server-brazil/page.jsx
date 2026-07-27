import CyntaraWithReviewsServerBrazilKeywordPage, { generateMetadata } from './cyntara-with-reviews-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraWithReviewsServerBrazilKeywordPage />;
}
