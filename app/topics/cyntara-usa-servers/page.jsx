import CyntaraUsaServersKeywordPage, { generateMetadata } from './cyntara-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraUsaServersKeywordPage />;
}
