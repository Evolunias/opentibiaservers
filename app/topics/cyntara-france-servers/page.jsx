import CyntaraFranceServersKeywordPage, { generateMetadata } from './cyntara-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraFranceServersKeywordPage />;
}
