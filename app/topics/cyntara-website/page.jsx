import CyntaraWebsiteKeywordPage, { generateMetadata } from './cyntara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraWebsiteKeywordPage />;
}
