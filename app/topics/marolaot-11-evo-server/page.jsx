import Marolaot11EvoServerKeywordPage, { generateMetadata } from './marolaot-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot11EvoServerKeywordPage />;
}
