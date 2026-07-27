import CyntaraNonPvpServerUkKeywordPage, { generateMetadata } from './cyntara-non-pvp-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraNonPvpServerUkKeywordPage />;
}
