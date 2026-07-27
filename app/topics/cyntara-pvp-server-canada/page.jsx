import CyntaraPvpServerCanadaKeywordPage, { generateMetadata } from './cyntara-pvp-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraPvpServerCanadaKeywordPage />;
}
