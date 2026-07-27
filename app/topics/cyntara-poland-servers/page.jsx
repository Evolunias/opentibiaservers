import CyntaraPolandServersKeywordPage, { generateMetadata } from './cyntara-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraPolandServersKeywordPage />;
}
