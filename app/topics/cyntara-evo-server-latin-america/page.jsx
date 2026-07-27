import CyntaraEvoServerLatinAmericaKeywordPage, { generateMetadata } from './cyntara-evo-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraEvoServerLatinAmericaKeywordPage />;
}
