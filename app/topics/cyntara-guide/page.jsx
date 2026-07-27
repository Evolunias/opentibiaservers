import CyntaraGuideKeywordPage, { generateMetadata } from './cyntara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraGuideKeywordPage />;
}
