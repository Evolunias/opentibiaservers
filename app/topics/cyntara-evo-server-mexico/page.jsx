import CyntaraEvoServerMexicoKeywordPage, { generateMetadata } from './cyntara-evo-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraEvoServerMexicoKeywordPage />;
}
