import CyntaraReviewKeywordPage, { generateMetadata } from './cyntara-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraReviewKeywordPage />;
}
