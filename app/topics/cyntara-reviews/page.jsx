import CyntaraReviewsKeywordPage, { generateMetadata } from './cyntara-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraReviewsKeywordPage />;
}
