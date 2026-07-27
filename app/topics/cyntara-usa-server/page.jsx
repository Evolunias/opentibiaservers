import CyntaraUsaServerKeywordPage, { generateMetadata } from './cyntara-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraUsaServerKeywordPage />;
}
