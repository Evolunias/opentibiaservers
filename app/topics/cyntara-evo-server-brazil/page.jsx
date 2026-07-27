import CyntaraEvoServerBrazilKeywordPage, { generateMetadata } from './cyntara-evo-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraEvoServerBrazilKeywordPage />;
}
