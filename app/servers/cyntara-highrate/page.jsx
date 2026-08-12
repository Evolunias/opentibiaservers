import CyntaraHighrateServerReviewPage, { generateMetadata } from './cyntara-highrate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraHighrateServerReviewPage />;
}
