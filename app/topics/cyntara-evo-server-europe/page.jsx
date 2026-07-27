import CyntaraEvoServerEuropeKeywordPage, { generateMetadata } from './cyntara-evo-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraEvoServerEuropeKeywordPage />;
}
