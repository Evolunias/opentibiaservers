import CyntaraPvpKeywordPage, { generateMetadata } from './cyntara-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraPvpKeywordPage />;
}
