import CyntaraArgentinaServerKeywordPage, { generateMetadata } from './cyntara-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraArgentinaServerKeywordPage />;
}
