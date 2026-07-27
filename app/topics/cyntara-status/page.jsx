import CyntaraStatusKeywordPage, { generateMetadata } from './cyntara-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraStatusKeywordPage />;
}
