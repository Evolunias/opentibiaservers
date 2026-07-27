import CyntaraPvpServerSwedenKeywordPage, { generateMetadata } from './cyntara-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraPvpServerSwedenKeywordPage />;
}
