import CyntaraGermanyServersKeywordPage, { generateMetadata } from './cyntara-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraGermanyServersKeywordPage />;
}
