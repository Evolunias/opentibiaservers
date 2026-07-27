import CyntaraPrivateServerKeywordPage, { generateMetadata } from './cyntara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraPrivateServerKeywordPage />;
}
