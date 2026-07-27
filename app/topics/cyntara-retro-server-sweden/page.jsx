import CyntaraRetroServerSwedenKeywordPage, { generateMetadata } from './cyntara-retro-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraRetroServerSwedenKeywordPage />;
}
