import CyntaraArgentinaServersKeywordPage, { generateMetadata } from './cyntara-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraArgentinaServersKeywordPage />;
}
