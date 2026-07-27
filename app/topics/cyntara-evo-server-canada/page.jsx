import CyntaraEvoServerCanadaKeywordPage, { generateMetadata } from './cyntara-evo-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraEvoServerCanadaKeywordPage />;
}
