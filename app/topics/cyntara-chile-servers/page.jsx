import CyntaraChileServersKeywordPage, { generateMetadata } from './cyntara-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraChileServersKeywordPage />;
}
