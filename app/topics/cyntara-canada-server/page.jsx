import CyntaraCanadaServerKeywordPage, { generateMetadata } from './cyntara-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraCanadaServerKeywordPage />;
}
