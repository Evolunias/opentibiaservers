import Marolaot12EvoServerKeywordPage, { generateMetadata } from './marolaot-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot12EvoServerKeywordPage />;
}
