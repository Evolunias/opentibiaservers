import CyntaraCanadaServersKeywordPage, { generateMetadata } from './cyntara-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraCanadaServersKeywordPage />;
}
