import CyntaraSwedenServersKeywordPage, { generateMetadata } from './cyntara-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraSwedenServersKeywordPage />;
}
